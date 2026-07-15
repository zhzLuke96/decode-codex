// Restored from ref/webview/assets/use-recording-waveform-Cfd-Ecbb.js
// use-recording-waveform-Cfd-Ecbb chunk restored from the Codex webview bundle.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
type WaveformVariant = "scrolling" | "centered" | "compact" | "orb";
type UseRecordingWaveformOptions = {
  bufferDurationSecs?: number;
  variant?: WaveformVariant;
};
const BASE_AMPLITUDE = 0.0025;
const ASSUMED_SAMPLE_RATE = 48000;
const CENTERED_ATTACK = 0.8;
const CENTERED_RELEASE = 0.32;
const CENTERED_MAX_LEVEL = 0.1;
const NORMALIZE_FLOOR = 0.006;
const NORMALIZE_CEILING = 0.16;
const CENTERED_RANDOM_WINDOW = 32;
const COMPACT_ATTACK = 0.36;
const COMPACT_RELEASE = 0.1;
const COMPACT_MAX_LEVEL = 0.085;
const COMPACT_PHASE_STEP = 0.05;
const COMPACT_SMOOTHING = 0.5;
const COMPACT_WIDTH_RATIO = 0.48;
const COMPACT_GAP_RATIO = 0.28;
const ORB_BASE_HEIGHT_RATIO = 0.08;
const ORB_BAR_GAP_PX = 2;
const ORB_BAR_WIDTH_PX = 3;
const ORB_BUCKET_COUNT = 8;
const ORB_ALPHA = 0.6;
const ORB_FADE_IN_STOP = 0.25;
const ORB_FADE_OUT_STOP = 0.95;
const ORB_BUCKET_INTERVAL_MS = 200;

export function initUseRecordingWaveformChunk(): void {
  void useRecordingWaveform;
}

export function useRecordingWaveform(
  options: UseRecordingWaveformOptions = {},
) {
  const { bufferDurationSecs = 10, variant = "scrolling" } = options;
  const [recordingDurationMs, setRecordingDurationMs] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorNodeRef = useRef<ScriptProcessorNode | null>(null);
  const recordingStartedAtRef = useRef<number | null>(null);
  const waveformCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const bucketsRef = useRef<number[]>([]);
  const centeredLevelRef = useRef(0);
  const compactLevelRef = useRef(0);
  const compactPhaseRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const orbAnimationStartedAtRef = useRef<number | null>(null);
  const orbPeakRef = useRef(0);
  const orbScrollOffsetRef = useRef(0);
  const pendingSamplesRef = useRef(new Float32Array());
  const samplesPerBucketRef = useRef(1);
  const lastDurationSecondRef = useRef(-1);
  const initializeBuckets = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      if (canvas == null) {
        return false;
      }
      const bucketCount = getBucketCount(canvas.clientWidth, variant);
      bucketsRef.current = Array.from(
        {
          length: bucketCount,
        },
        baseAmplitude,
      );
      samplesPerBucketRef.current = Math.max(
        1,
        Math.floor((ASSUMED_SAMPLE_RATE * bufferDurationSecs) / bucketCount),
      );
      pendingSamplesRef.current = new Float32Array();
      return true;
    },
    [bufferDurationSecs, variant],
  );
  const clearCanvas = useCallback(() => {
    const canvas = waveformCanvasRef.current;
    canvas?.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
  }, []);
  const resetWaveformDisplay = useCallback(() => {
    bucketsRef.current = [];
    centeredLevelRef.current = 0;
    compactLevelRef.current = 0;
    compactPhaseRef.current = 0;
    orbAnimationStartedAtRef.current = null;
    orbPeakRef.current = 0;
    orbScrollOffsetRef.current = 0;
    pendingSamplesRef.current = new Float32Array();
    samplesPerBucketRef.current = 1;
    setRecordingDurationMs(0);
    lastDurationSecondRef.current = -1;
  }, []);
  const drawWaveform = useCallback(() => {
    const canvas = waveformCanvasRef.current;
    if (canvas == null) {
      return;
    }
    const context = canvas.getContext("2d");
    if (context == null) {
      return;
    }
    const { clientHeight, clientWidth } = canvas;
    if (clientWidth === 0 || clientHeight === 0) {
      return;
    }
    const bucketCount = getBucketCount(clientWidth, variant);
    if (bucketsRef.current.length !== bucketCount) {
      initializeBuckets(canvas);
    }
    const buckets = bucketsRef.current;
    if (buckets.length === 0) {
      return;
    }
    const deviceScale = window.devicePixelRatio || 1;
    canvas.width = clientWidth * deviceScale;
    canvas.height = clientHeight * deviceScale;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    const halfHeight = canvas.height * 0.5;
    context.translate(0, halfHeight);
    context.fillStyle = getComputedStyle(canvas).color || "#000";
    if (variant === "orb") {
      drawOrbWaveform(context, canvas, buckets, orbScrollOffsetRef.current);
      context.restore();
      return;
    }
    const bucketWidth = canvas.width / buckets.length;
    if (variant === "compact") {
      drawCompactWaveform(context, canvas, buckets, bucketWidth, halfHeight);
      context.restore();
      return;
    }
    if (variant === "centered") {
      drawCenteredWaveform(context, buckets, bucketWidth, halfHeight);
      context.restore();
      return;
    }
    drawScrollingWaveform(context, buckets, bucketWidth, halfHeight);
    context.restore();
  }, [initializeBuckets, variant]);
  const stopWaveformCapture = useCallback(() => {
    if (processorNodeRef.current != null) {
      processorNodeRef.current.onaudioprocess = null;
      processorNodeRef.current.disconnect();
      processorNodeRef.current = null;
    }
    if (sourceNodeRef.current != null) {
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }
    if (audioContextRef.current != null) {
      void audioContextRef.current.close();
      audioContextRef.current = null;
    }
    recordingStartedAtRef.current = null;
    bucketsRef.current = [];
    centeredLevelRef.current = 0;
    compactLevelRef.current = 0;
    compactPhaseRef.current = 0;
    if (animationFrameRef.current != null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = null;
    orbAnimationStartedAtRef.current = null;
    orbPeakRef.current = 0;
    orbScrollOffsetRef.current = 0;
    pendingSamplesRef.current = new Float32Array();
    samplesPerBucketRef.current = 1;
    lastDurationSecondRef.current = -1;
    clearCanvas();
  }, [clearCanvas]);
  const startOrbAnimation = useCallback(() => {
    const tick = () => {
      const startedAt = orbAnimationStartedAtRef.current;
      orbScrollOffsetRef.current =
        startedAt == null
          ? 0
          : Math.min(
              1,
              Math.max(
                0,
                (performance.now() - startedAt) / ORB_BUCKET_INTERVAL_MS,
              ),
            );
      drawWaveform();
      animationFrameRef.current = requestAnimationFrame(tick);
    };
    animationFrameRef.current = requestAnimationFrame(tick);
  }, [drawWaveform]);
  const startWaveformCapture = useCallback(
    (stream: MediaStream) => {
      stopWaveformCapture();
      resetWaveformDisplay();
      initializeBuckets(waveformCanvasRef.current);
      if (variant === "orb") {
        orbAnimationStartedAtRef.current = performance.now();
        startOrbAnimation();
      }
      drawWaveform();
      if (typeof AudioContext > "undefined") {
        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;
        const sourceNode = audioContext.createMediaStreamSource(stream);
        sourceNodeRef.current = sourceNode;
        const processorNode = audioContext.createScriptProcessor(2048, 1, 1);
        processorNodeRef.current = processorNode;
        recordingStartedAtRef.current = performance.now();
        processorNode.onaudioprocess = (event) => {
          handleAudioProcess(event.inputBuffer.getChannelData(0));
        };
        sourceNode.connect(processorNode);
        processorNode.connect(audioContext.destination);
      }
    },
    [
      drawWaveform,
      initializeBuckets,
      resetWaveformDisplay,
      startOrbAnimation,
      stopWaveformCapture,
      variant,
    ],
  );
  const getCurrentRecordingDurationMs = useCallback(
    () =>
      recordingStartedAtRef.current == null
        ? recordingDurationMs
        : Math.max(0, performance.now() - recordingStartedAtRef.current),
    [recordingDurationMs],
  );
  const controls = useMemo(
    () => ({
      getCurrentRecordingDurationMs,
      recordingDurationMs,
      waveformCanvasRef,
      startWaveformCapture,
      stopWaveformCapture,
      resetWaveformDisplay,
    }),
    [
      getCurrentRecordingDurationMs,
      recordingDurationMs,
      resetWaveformDisplay,
      startWaveformCapture,
      stopWaveformCapture,
    ],
  );
  useEffect(() => () => stopWaveformCapture(), [stopWaveformCapture]);
  return controls;
  function handleAudioProcess(samples: Float32Array) {
    let energy = 0;
    for (let index = 0; index < samples.length; index += 1) {
      const amplitude = Math.abs(samples[index] ?? 0);
      energy += amplitude * amplitude;
      samples[index] = amplitude < BASE_AMPLITUDE ? BASE_AMPLITUDE : amplitude;
    }
    if (bucketsRef.current.length === 0) {
      initializeBuckets(waveformCanvasRef.current);
    }
    const bucketCount = bucketsRef.current.length;
    const rms = Math.sqrt(energy / Math.max(1, samples.length));
    if (variant === "orb") {
      updateOrbBuckets(rms);
    } else if (variant === "compact") {
      updateCompactBuckets(samples, bucketCount, rms);
    } else if (variant === "centered") {
      updateCenteredBuckets(samples, bucketCount, rms);
    } else {
      updateScrollingBuckets(samples, bucketCount);
    }
    updateRecordingDuration();
  }
  function updateOrbBuckets(rms: number) {
    const normalized = normalizeAmplitude(rms);
    orbPeakRef.current = Math.max(orbPeakRef.current, normalized);
    const now = performance.now();
    let bucketStartedAt = orbAnimationStartedAtRef.current ?? now;
    let changed = false;
    while (now - bucketStartedAt >= ORB_BUCKET_INTERVAL_MS) {
      bucketsRef.current.push(orbPeakRef.current);
      bucketsRef.current.shift();
      orbPeakRef.current = normalized;
      bucketStartedAt += ORB_BUCKET_INTERVAL_MS;
      changed = true;
    }
    orbAnimationStartedAtRef.current = bucketStartedAt;
    if (changed) {
      drawWaveform();
    }
  }
  function updateCompactBuckets(
    samples: Float32Array,
    bucketCount: number,
    rms: number,
  ) {
    const targetLevel = normalizeAmplitude(rms) * COMPACT_MAX_LEVEL;
    const currentLevel = compactLevelRef.current;
    const smoothing =
      targetLevel > currentLevel ? COMPACT_ATTACK : COMPACT_RELEASE;
    const smoothedLevel =
      currentLevel * (1 - smoothing) + targetLevel * smoothing;
    compactLevelRef.current = smoothedLevel;
    compactPhaseRef.current += COMPACT_PHASE_STEP;
    for (let index = 0; index < bucketCount; index += 1) {
      const wave =
        0.9 + ((Math.sin(compactPhaseRef.current - index * 0.8) + 1) / 2) * 0.1;
      const transientScale = getCompactTransientScale(
        samples,
        index,
        bucketCount,
        rms,
      );
      const targetBucket = Math.min(
        COMPACT_MAX_LEVEL,
        BASE_AMPLITUDE + smoothedLevel * wave * transientScale,
      );
      const currentBucket = bucketsRef.current[index] ?? BASE_AMPLITUDE;
      bucketsRef.current[index] =
        currentBucket * (1 - COMPACT_SMOOTHING) +
        targetBucket * COMPACT_SMOOTHING;
    }
    drawWaveform();
  }
  function updateCenteredBuckets(
    samples: Float32Array,
    bucketCount: number,
    rms: number,
  ) {
    const targetLevel = normalizeAmplitude(rms) * CENTERED_MAX_LEVEL;
    const currentLevel = centeredLevelRef.current;
    const smoothing =
      targetLevel > currentLevel ? CENTERED_ATTACK : CENTERED_RELEASE;
    const smoothedLevel =
      currentLevel * (1 - smoothing) + targetLevel * smoothing;
    centeredLevelRef.current = smoothedLevel;
    for (let index = 0; index < bucketCount; index += 1) {
      const randomScale = getCenteredRandomScale(
        samples,
        Math.round(Math.abs(index - (bucketCount - 1) / 2)),
        rms,
      );
      bucketsRef.current[index] = Math.min(
        CENTERED_MAX_LEVEL,
        BASE_AMPLITUDE +
          smoothedLevel *
            getCenteredMultiplier(index, bucketCount) *
            randomScale,
      );
    }
    drawWaveform();
  }
  function updateScrollingBuckets(samples: Float32Array, bucketCount: number) {
    const pendingSamples = pendingSamplesRef.current;
    const combinedSamples = new Float32Array(
      pendingSamples.length + samples.length,
    );
    combinedSamples.set(pendingSamples, 0);
    combinedSamples.set(samples, pendingSamples.length);
    const samplesPerBucket = samplesPerBucketRef.current;
    let didAppendBucket = false;
    let cursor = 0;
    if (bucketCount > 0 && samplesPerBucket > 0) {
      while (cursor + samplesPerBucket <= combinedSamples.length) {
        const end = cursor + samplesPerBucket;
        let sum = 0;
        for (let index = cursor; index < end; index += 1) {
          sum += combinedSamples[index] ?? 0;
        }
        bucketsRef.current.push(sum / samplesPerBucket);
        if (bucketsRef.current.length > bucketCount) {
          bucketsRef.current.shift();
        }
        cursor = end;
        didAppendBucket = true;
      }
    }
    pendingSamplesRef.current = combinedSamples.slice(cursor);
    if (didAppendBucket) {
      drawWaveform();
    }
  }
  function updateRecordingDuration() {
    if (recordingStartedAtRef.current == null) {
      return;
    }
    const elapsedSeconds = Math.max(
      0,
      Math.floor((performance.now() - recordingStartedAtRef.current) / 1000),
    );
    if (elapsedSeconds !== lastDurationSecondRef.current) {
      lastDurationSecondRef.current = elapsedSeconds;
      setRecordingDurationMs(elapsedSeconds * 1000);
    }
  }
}
function baseAmplitude() {
  return BASE_AMPLITUDE;
}
function normalizeAmplitude(amplitude: number) {
  const normalized = Math.max(0, amplitude - NORMALIZE_FLOOR);
  return Math.min(1, normalized / (NORMALIZE_CEILING - NORMALIZE_FLOOR)) ** 0.6;
}
function getBucketCount(width: number, variant: WaveformVariant) {
  switch (variant) {
    case "compact":
      return 4;
    case "orb":
      return ORB_BUCKET_COUNT + 1;
    case "scrolling":
    case "centered":
      return Math.max(1, Math.floor(width / 4));
  }
}
function getCenteredMultiplier(index: number, bucketCount: number) {
  const middle = (bucketCount - 1) / 2;
  const distance = middle === 0 ? 0 : Math.abs(index - middle) / middle;
  return 0.18 + (1 - distance) ** 2 * 1.45;
}
function getCompactTransientScale(
  samples: Float32Array,
  bucketIndex: number,
  bucketCount: number,
  rms: number,
) {
  const windowSize = Math.max(1, Math.floor(samples.length / bucketCount));
  const start = Math.min(
    Math.max(0, samples.length - windowSize),
    bucketIndex * windowSize,
  );
  let sumSquares = 0;
  for (let index = start; index < start + windowSize; index += 1) {
    const sample = samples[index] ?? BASE_AMPLITUDE;
    sumSquares += sample * sample;
  }
  const localRms = Math.sqrt(sumSquares / windowSize);
  const scale = rms <= BASE_AMPLITUDE ? 1 : localRms / rms;
  return Math.min(1.14, Math.max(0.86, scale));
}
function getCenteredRandomScale(
  samples: Float32Array,
  bucketDistanceFromCenter: number,
  rms: number,
) {
  const windowSize = Math.min(CENTERED_RANDOM_WINDOW, samples.length);
  const start = deterministicSampleStart(
    bucketDistanceFromCenter,
    Math.max(1, samples.length - windowSize),
  );
  let sumSquares = 0;
  for (let index = start; index < start + windowSize; index += 1) {
    const sample = samples[index] ?? BASE_AMPLITUDE;
    sumSquares += sample * sample;
  }
  const localRms = Math.sqrt(sumSquares / windowSize);
  const scale = rms <= BASE_AMPLITUDE ? 1 : localRms / rms;
  return Math.min(1.45, Math.max(0.45, 0.35 + scale * 0.75));
}
function deterministicSampleStart(seed: number, maxStart: number) {
  const x = Math.sin((seed + 1) * 12.9898) * 43758.5453;
  return Math.floor((x - Math.floor(x)) * maxStart);
}
function drawOrbWaveform(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  buckets: number[],
  scrollOffset: number,
) {
  const deviceScale = window.devicePixelRatio || 1;
  const barWidth = ORB_BAR_WIDTH_PX * deviceScale;
  const barStep = barWidth + ORB_BAR_GAP_PX * deviceScale;
  const xOffset = -barStep * scrollOffset;
  for (let index = 0; index < buckets.length; index += 1) {
    const value =
      ORB_BASE_HEIGHT_RATIO +
      Math.min(1, Math.max(0, buckets[index] ?? 0)) *
        (1 - ORB_BASE_HEIGHT_RATIO);
    const height = canvas.height * value * ORB_ALPHA;
    const x = index * barStep + xOffset;
    const radius = Math.min(barWidth / 2, height / 2);
    context.globalAlpha = 0.9;
    context.beginPath();
    context.roundRect(x, -height / 2, barWidth, height, radius);
    context.fill();
  }
  const gradient = context.createRadialGradient(
    canvas.width / 2,
    0,
    0,
    canvas.width / 2,
    0,
    canvas.width / 2,
  );
  gradient.addColorStop(0, "rgb(0 0 0 / 1)");
  gradient.addColorStop(ORB_FADE_IN_STOP, "rgb(0 0 0 / 1)");
  gradient.addColorStop(ORB_FADE_OUT_STOP, "rgb(0 0 0 / 0)");
  gradient.addColorStop(1, "rgb(0 0 0 / 0)");
  context.globalAlpha = 1;
  context.globalCompositeOperation = "destination-in";
  context.fillStyle = gradient;
  context.fillRect(0, -canvas.height / 2, canvas.width, canvas.height);
}
function drawCompactWaveform(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  buckets: number[],
  bucketWidth: number,
  halfHeight: number,
) {
  const deviceScale = window.devicePixelRatio || 1;
  const barWidth = bucketWidth * COMPACT_WIDTH_RATIO;
  const gap = bucketWidth * COMPACT_GAP_RATIO;
  const totalWidth = barWidth * buckets.length + gap * (buckets.length - 1);
  const startX = (canvas.width - totalWidth) / 2;
  for (let index = 0; index < buckets.length; index += 1) {
    const value = buckets[index] ?? 0;
    const height = Math.max(1.5 * deviceScale, value * 10 * halfHeight);
    const x = startX + index * (barWidth + gap);
    const radius = Math.min(barWidth / 2, height);
    context.globalAlpha = value <= BASE_AMPLITUDE ? 0.5 : 0.95;
    context.beginPath();
    context.roundRect(x, -height, barWidth, height * 2, radius);
    context.fill();
  }
}
function drawCenteredWaveform(
  context: CanvasRenderingContext2D,
  buckets: number[],
  bucketWidth: number,
  halfHeight: number,
) {
  const barWidth = bucketWidth / 2;
  for (let index = 0; index < buckets.length; index += 1) {
    const value = buckets[index] ?? 0;
    const multiplier = getCenteredMultiplier(index, buckets.length);
    const height = value * 10 * halfHeight;
    context.globalAlpha =
      value <= BASE_AMPLITUDE ? 0.2 : Math.min(1, 0.35 + multiplier * 0.45);
    context.fillRect(index * bucketWidth, -height, barWidth, height * 2);
  }
}
function drawScrollingWaveform(
  context: CanvasRenderingContext2D,
  buckets: number[],
  bucketWidth: number,
  halfHeight: number,
) {
  let firstNonSilentIndex = -1;
  for (let index = 0; index < buckets.length; index += 1) {
    if ((buckets[index] ?? 0) > BASE_AMPLITUDE) {
      firstNonSilentIndex = index;
      break;
    }
  }
  for (let index = 0; index < buckets.length; index += 1) {
    const value = (buckets[index] ?? 0) * 10;
    const height = value * halfHeight;
    context.globalAlpha =
      firstNonSilentIndex === -1 || index < firstNonSilentIndex ? 0.35 : 1;
    context.fillRect(index * bucketWidth, -height, bucketWidth / 2, height * 2);
  }
}
