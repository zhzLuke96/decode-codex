// Restored from ref/webview/assets/auto-track-B-5mUyDz.js
// Segment AutoTrack helpers for tracking link clicks and form submissions.
import { withTimeout } from "../utils/callback";
type SegmentTrackOptions = Record<string, unknown>;
type SegmentTrackValue<TElement extends Element> =
  | unknown
  | ((element: TElement) => unknown);
type TrackableElementCollection<TElement extends Element> =
  | TElement
  | ArrayLike<TElement>
  | Iterable<TElement>
  | {
      toArray(): TElement[];
    };
type SegmentAutoTrackContext = {
  settings: {
    timeout?: number;
  };
  track(
    eventName: unknown,
    properties: unknown,
    options: SegmentTrackOptions,
  ): Promise<unknown>;
};
type JQuerySubmitBinder = {
  submit(handler: (event: Event) => void): void;
};
type JQueryLike = (element: HTMLFormElement) => JQuerySubmitBinder;
type WindowWithSubmitHelpers = Window &
  typeof globalThis & {
    jQuery?: JQueryLike;
    Zepto?: JQueryLike;
  };
function resolveTrackValue<TElement extends Element>(
  valueOrResolver: SegmentTrackValue<TElement>,
  element: TElement,
): unknown {
  return valueOrResolver instanceof Function
    ? valueOrResolver(element)
    : valueOrResolver;
}
function isCollectionWithToArray<TElement extends Element>(
  value: TrackableElementCollection<TElement>,
): value is {
  toArray(): TElement[];
} {
  return "toArray" in Object(value);
}
function toElementArray<TElement extends Element>(
  collection: TrackableElementCollection<TElement>,
): TElement[] {
  if (collection instanceof Element) {
    return [collection as TElement];
  }
  if (isCollectionWithToArray(collection)) {
    return collection.toArray();
  }
  return Array.from(collection as ArrayLike<TElement> | Iterable<TElement>);
}
function isModifiedClick(event: MouseEvent): boolean {
  return Boolean(
    event.ctrlKey ||
      event.shiftKey ||
      event.metaKey ||
      (event.button && event.button === 1),
  );
}
function opensInNewBrowsingContext(
  linkElement: Element,
  href: string | null,
): boolean {
  return Boolean(
    (linkElement as HTMLAnchorElement).target === "_blank" && href,
  );
}
function getLinkHref(linkElement: Element): string | null {
  return (
    linkElement.getAttribute("href") ||
    linkElement.getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
    linkElement.getAttribute("xlink:href") ||
    linkElement.getElementsByTagName("a")[0]?.getAttribute("href") ||
    null
  );
}
function autoTrackLink(
  this: SegmentAutoTrackContext,
  links: TrackableElementCollection<Element> | null | undefined,
  eventName: SegmentTrackValue<Element>,
  properties: SegmentTrackValue<Element>,
  options?: SegmentTrackOptions,
): SegmentAutoTrackContext {
  if (!links) return this;
  for (const linkElement of toElementArray(links)) {
    linkElement.addEventListener(
      "click",
      (event: Event) => {
        const clickEvent = event as MouseEvent;
        const resolvedEventName = resolveTrackValue(eventName, linkElement);
        const resolvedProperties = resolveTrackValue(properties, linkElement);
        const href = getLinkHref(linkElement);
        const tracking = withTimeout(
          this.track(resolvedEventName, resolvedProperties, options ?? {}),
          this.settings.timeout ?? 500,
        );
        if (
          opensInNewBrowsingContext(linkElement, href) ||
          isModifiedClick(clickEvent) ||
          !href
        ) {
          return;
        }
        event.preventDefault
          ? event.preventDefault()
          : (event.returnValue = false);
        tracking
          .catch(console.error)
          .then(() => {
            window.location.href = href;
          })
          .catch(console.error);
      },
      false,
    );
  }
  return this;
}
function autoTrackForm(
  this: SegmentAutoTrackContext,
  forms: TrackableElementCollection<HTMLFormElement> | null | undefined,
  eventName: SegmentTrackValue<HTMLFormElement>,
  properties: SegmentTrackValue<HTMLFormElement>,
  options?: SegmentTrackOptions,
): SegmentAutoTrackContext {
  if (!forms) return this;
  for (const formElement of toElementArray(forms)) {
    if (!(formElement instanceof Element)) {
      throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");
    }
    const submitHandler = (event: Event) => {
      event.preventDefault
        ? event.preventDefault()
        : (event.returnValue = false);
      const resolvedEventName = resolveTrackValue(eventName, formElement);
      const resolvedProperties = resolveTrackValue(properties, formElement);
      withTimeout(
        this.track(resolvedEventName, resolvedProperties, options ?? {}),
        this.settings.timeout ?? 500,
      )
        .catch(console.error)
        .then(() => {
          formElement.submit();
        })
        .catch(console.error);
    };
    const submitHelper =
      (window as WindowWithSubmitHelpers).jQuery ??
      (window as WindowWithSubmitHelpers).Zepto;
    if (submitHelper) {
      submitHelper(formElement).submit(submitHandler);
    } else {
      formElement.addEventListener("submit", submitHandler, false);
    }
  }
  return this;
}

export { autoTrackForm, autoTrackLink };
