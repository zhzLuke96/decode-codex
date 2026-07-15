// Restored from ref/webview/assets/index.umd-BU1Bn__H.js
// Segment analytics video plugin wrappers for Vimeo and YouTube players.
type AnalyticsWindow = Window & {
  analytics: {
    track(
      event: string,
      properties: Record<string, any>,
      options: Record<string, any>,
    ): void;
  };
  segmentYoutubeOnReady?: (event: any) => void;
  segmentYoutubeOnStateChange?: (event: { data: number }) => void;
  YT?: {
    PlayerState: {
      BUFFERING: number;
      PLAYING: number;
      PAUSED: number;
      ENDED: number;
    };
  };
};
class VideoAnalytics {
  constructor(private readonly pluginName: string) {}
  track(event: string, properties: Record<string, any>): void {
    (window as AnalyticsWindow).analytics.track(event, properties, {
      integration: {
        name: this.pluginName,
      },
    });
  }
}
class VimeoAnalytics extends VideoAnalytics {
  private metadata = {
    content: {} as Record<string, any>,
    playback: {
      videoPlayer: "Vimeo",
    } as Record<string, any>,
  };
  private mostRecentHeartbeat = 0;
  private isPaused = false;
  constructor(
    private readonly player: any,
    private readonly authToken: string,
  ) {
    super("VimeoAnalytics");
  }
  initialize(): void {
    const handlers = {
      loaded: this.retrieveMetadata,
      play: this.trackPlay,
      pause: this.trackPause,
      ended: this.trackEnded,
      timeupdate: this.trackHeartbeat,
    };
    for (const eventName in handlers) {
      this.registerHandler(
        eventName,
        handlers[eventName as keyof typeof handlers],
      );
    }
    this.player
      .getVideoId()
      .then((id: string) =>
        this.retrieveMetadata({
          id,
        }),
      )
      .catch(console.error);
  }
  private registerHandler(
    eventName: string,
    handler: (event: any) => void,
  ): void {
    this.player.on(eventName, (event: any) => {
      this.updateMetadata(event);
      handler.call(this, event);
    });
  }
  private trackPlay(): void {
    if (this.isPaused) {
      this.track("Video Playback Resumed", this.metadata.playback);
      this.isPaused = false;
      return;
    }
    this.track("Video Playback Started", this.metadata.playback);
    this.track("Video Content Started", this.metadata.content);
  }
  private trackEnded(): void {
    this.track("Video Playback Completed", this.metadata.playback);
    this.track("Video Content Completed", this.metadata.content);
  }
  private trackHeartbeat(): void {
    const previousHeartbeat = this.mostRecentHeartbeat;
    const position = this.metadata.playback.position;
    if (position !== previousHeartbeat && position - previousHeartbeat >= 10) {
      this.track("Video Content Playing", this.metadata.content);
      this.mostRecentHeartbeat = Math.floor(position);
    }
  }
  private trackPause(): void {
    this.isPaused = true;
    this.track("Video Playback Paused", this.metadata.playback);
  }
  private retrieveMetadata(event: { id: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      fetch(`https://api.vimeo.com/videos/${event.id}`, {
        headers: {
          Authorization: `Bearer ${this.authToken}`,
        },
      })
        .then((response) => (response.ok ? response.json() : reject(response)))
        .then((metadata) => {
          this.metadata.content.title = metadata.name;
          this.metadata.content.description = metadata.description;
          this.metadata.content.publisher = metadata.user.name;
          this.metadata.playback.position = 0;
          this.metadata.playback.totalLength = metadata.duration;
          resolve();
        })
        .catch((error) => {
          console.error("Request to Vimeo API Failed with: ", error);
          reject(error);
        });
    });
  }
  private updateMetadata(event: { seconds: number }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.player
        .getVolume()
        .then((volume: number) => {
          if (volume) this.metadata.playback.sound = 100 * volume;
          this.metadata.playback.position = event.seconds;
          resolve();
        })
        .catch(reject);
    });
  }
}
class YouTubeAnalytics extends VideoAnalytics {
  private playerLoaded = false;
  private playbackStarted = false;
  private contentStarted = false;
  private isPaused = false;
  private isBuffering = false;
  private isSeeking = false;
  private lastRecordedTime = {
    timeReported: Date.now(),
    timeElapsed: 0,
  };
  private metadata = [
    {
      playback: {
        video_player: "youtube",
      } as Record<string, any>,
      content: {} as Record<string, any>,
    },
  ];
  private playlistIndex = 0;
  constructor(
    private readonly player: any,
    private readonly apiKey: string,
  ) {
    super("YoutubeAnalytics");
  }
  initialize(): void {
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.segmentYoutubeOnStateChange =
      this.onPlayerStateChange.bind(this);
    analyticsWindow.segmentYoutubeOnReady = this.onPlayerReady.bind(this);
    this.player.addEventListener("onReady", "segmentYoutubeOnReady");
    this.player.addEventListener(
      "onStateChange",
      "segmentYoutubeOnStateChange",
    );
  }
  private onPlayerReady(): void {
    this.retrieveMetadata();
  }
  private onPlayerStateChange(event: { data: number }): void {
    const currentTime = this.player.getCurrentTime();
    const currentMetadata = this.metadata[this.playlistIndex];
    if (currentMetadata) {
      currentMetadata.playback.position = currentTime;
      currentMetadata.content.position = currentTime;
      currentMetadata.playback.quality = this.player.getPlaybackQuality();
      currentMetadata.playback.sound = this.player.isMuted()
        ? 0
        : this.player.getVolume();
    }
    const playerState = (window as AnalyticsWindow).YT?.PlayerState;
    switch (event.data) {
      case -1:
        if (!this.playerLoaded) {
          this.retrieveMetadata();
          this.playerLoaded = true;
        }
        break;
      case playerState?.BUFFERING:
        this.handleBuffer();
        break;
      case playerState?.PLAYING:
        this.handlePlay();
        break;
      case playerState?.PAUSED:
        this.handlePause();
        break;
      case playerState?.ENDED:
        this.handleEnd();
        break;
    }
    this.lastRecordedTime = {
      timeReported: Date.now(),
      timeElapsed: 1000 * this.player.getCurrentTime(),
    };
  }
  private retrieveMetadata(): Promise<void> {
    return new Promise((resolve, reject) => {
      const videoData = this.player.getVideoData();
      const playlist = this.player.getPlaylist() || [videoData.video_id];
      const ids = playlist.join();
      fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${ids}&part=snippet,contentDetails&key=${this.apiKey}`,
      )
        .then((response) => {
          if (!response.ok) {
            const error = new Error(
              "Segment request to Youtube API failed (likely due to a bad API Key. Events will still be sent but will not contain video metadata)",
            ) as Error & {
              response?: Response;
            };
            error.response = response;
            throw error;
          }
          return response.json();
        })
        .then((response) => {
          this.metadata = [];
          let totalLength = 0;
          for (let index = 0; index < playlist.length; index++) {
            const item = response.items[index];
            this.metadata.push({
              content: {
                title: item.snippet.title,
                description: item.snippet.description,
                keywords: item.snippet.tags,
                channel: item.snippet.channelTitle,
                airdate: item.snippet.publishedAt,
              },
              playback: {},
            });
            totalLength += parseYouTubeDuration(item.contentDetails.duration);
          }
          for (let index = 0; index < playlist.length; index++) {
            this.metadata[index].playback = {
              total_length: totalLength,
              video_player: "youtube",
            };
          }
          resolve();
        })
        .catch((error) => {
          this.metadata = playlist.map(() => ({
            playback: {
              video_player: "youtube",
            },
            content: {},
          }));
          reject(error);
        });
    });
  }
  private handleBuffer(): void {
    const seeking = this.determineSeek();
    if (!this.playbackStarted) {
      this.playbackStarted = true;
      this.track(
        "Video Playback Started",
        this.metadata[this.playlistIndex].playback,
      );
    }
    if (seeking && !this.isSeeking) {
      this.isSeeking = true;
      this.track(
        "Video Playback Seek Started",
        this.metadata[this.playlistIndex].playback,
      );
    }
    if (this.isSeeking) {
      this.track(
        "Video Playback Seek Completed",
        this.metadata[this.playlistIndex].playback,
      );
      this.isSeeking = false;
    }
    const playlist = this.player.getPlaylist();
    if (
      playlist &&
      this.player.getCurrentTime() === 0 &&
      this.player.getPlaylistIndex() !== this.playlistIndex
    ) {
      this.contentStarted = false;
      if (
        this.playlistIndex === playlist.length - 1 &&
        this.player.getPlaylistIndex() === 0
      ) {
        this.track(
          "Video Playback Completed",
          this.metadata[this.player.getPlaylistIndex()].playback,
        );
        this.track(
          "Video Playback Started",
          this.metadata[this.player.getPlaylistIndex()].playback,
        );
      }
    }
    this.track(
      "Video Playback Buffer Started",
      this.metadata[this.playlistIndex].playback,
    );
    this.isBuffering = true;
  }
  private handlePlay(): void {
    if (!this.contentStarted) {
      this.playlistIndex = this.player.getPlaylistIndex();
      if (this.playlistIndex === -1) this.playlistIndex = 0;
      this.track(
        "Video Content Started",
        this.metadata[this.playlistIndex].content,
      );
      this.contentStarted = true;
    }
    if (this.isBuffering) {
      this.track(
        "Video Playback Buffer Completed",
        this.metadata[this.playlistIndex].playback,
      );
      this.isBuffering = false;
    }
    if (this.isPaused) {
      this.track(
        "Video Playback Resumed",
        this.metadata[this.playlistIndex].playback,
      );
      this.isPaused = false;
    }
  }
  private handlePause(): void {
    const seeking = this.determineSeek();
    if (this.isBuffering) {
      this.track(
        "Video Playback Buffer Completed",
        this.metadata[this.playlistIndex].playback,
      );
      this.isBuffering = false;
    }
    if (this.isPaused) return;
    if (seeking) {
      this.track(
        "Video Playback Seek Started",
        this.metadata[this.playlistIndex].playback,
      );
      this.isSeeking = true;
    } else {
      this.track(
        "Video Playback Paused",
        this.metadata[this.playlistIndex].playback,
      );
      this.isPaused = true;
    }
  }
  private handleEnd(): void {
    this.track(
      "Video Content Completed",
      this.metadata[this.playlistIndex].content,
    );
    this.contentStarted = false;
    const playlistIndex = this.player.getPlaylistIndex();
    const playlist = this.player.getPlaylist();
    if (
      (playlist && playlistIndex === playlist.length - 1) ||
      playlistIndex === -1
    ) {
      this.track(
        "Video Playback Completed",
        this.metadata[this.playlistIndex].playback,
      );
      this.playbackStarted = false;
    }
  }
  private determineSeek(): boolean {
    const reportedDelta =
      this.isPaused || this.isBuffering
        ? 0
        : Date.now() - this.lastRecordedTime.timeReported;
    const elapsedDelta =
      1000 * this.player.getCurrentTime() - this.lastRecordedTime.timeElapsed;
    return Math.abs(reportedDelta - elapsedDelta) > 2000;
  }
}
function parseYouTubeDuration(duration: string): number {
  const parts = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!parts) return 0;
  const [, hours, minutes, seconds] = parts.map((part) =>
    part == null ? undefined : part.replace(/\D/, ""),
  );
  return (
    3600 * (Number.parseInt(hours ?? "", 10) || 0) +
    60 * (Number.parseInt(minutes ?? "", 10) || 0) +
    (Number.parseInt(seconds ?? "", 10) || 0)
  );
}
const analyticsVideoPlugins = {
  VimeoAnalytics,
  YouTubeAnalytics,
};
export default analyticsVideoPlugins;
