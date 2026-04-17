import { r as reactExports, j as jsxRuntimeExports } from "./index-Dvwu-T9G.js";
import { f as frame, c as cancelFrame, i as interpolate, s as supportsViewTimeline, a as supportsScrollTimeline, p as progress, v as velocityPerSecond, b as isHTMLElement, d as defaultOffset$1, e as clamp, n as noop, r as resize, g as frameData, u as useConstant, h as useIsomorphicLayoutEffect, j as invariant, m as motionValue, M as MotionConfigContext, k as collectMotionValues, l as motion } from "./proxy-BP_ChBL_.js";
import { c as createLucideIcon } from "./createLucideIcon-bMRtb0YX.js";
import { R as Recycle } from "./recycle-Bo-bTYLV.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const { currentTime } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress2 = percentage / 100;
    if (prevProgress !== progress2) {
      update(progress2);
    }
    prevProgress = progress2;
  };
  frame.preUpdate(onFrame, true);
  return () => cancelFrame(onFrame);
}
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, options);
  return useImmediate ? interpolator(inputValue) : interpolator;
}
function canUseNativeTimeline(target) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() : supportsScrollTimeline();
}
const maxElapsed = 50;
const createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
const createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
const keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = Math.abs(element[`scroll${position}`]);
  axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}
function calcInset(element, container) {
  const inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (isHTMLElement(current)) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const { x, y } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}
const namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (edge in namedEdges) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber;
    } else if (edge.endsWith("%")) {
      edge = asNumber / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}
const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}
const ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};
const point = { x: 0, y: 0 };
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
  const { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: (time) => {
      measure(element, options.target, info);
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}
const scrollListeners = /* @__PURE__ */ new WeakMap();
const resizeListeners = /* @__PURE__ */ new WeakMap();
const onScrollHandlers = /* @__PURE__ */ new WeakMap();
const scrollSize = /* @__PURE__ */ new WeakMap();
const dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
const getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
  if (!container)
    return noop;
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) {
        handler.measure(frameData.timestamp);
      }
      frame.preUpdate(notifyAll);
    };
    const notifyAll = () => {
      for (const handler of containerHandlers) {
        handler.notify();
      }
    };
    const listener2 = () => frame.read(measureAll);
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2);
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2);
    listener2();
  }
  if (trackContentSize && !dimensionCheckProcesses.has(container)) {
    const listener2 = scrollListeners.get(container);
    const size = {
      width: container.scrollWidth,
      height: container.scrollHeight
    };
    scrollSize.set(container, size);
    const checkScrollDimensions = () => {
      const newWidth = container.scrollWidth;
      const newHeight = container.scrollHeight;
      if (size.width !== newWidth || size.height !== newHeight) {
        listener2();
        size.width = newWidth;
        size.height = newHeight;
      }
    };
    const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
    dimensionCheckProcesses.set(container, dimensionCheckProcess);
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    var _a;
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers)
      return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size)
      return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      (_a = resizeListeners.get(container)) == null ? void 0 : _a();
      window.removeEventListener("resize", scrollListener);
    }
    const dimensionCheckProcess = dimensionCheckProcesses.get(container);
    if (dimensionCheckProcess) {
      cancelFrame(dimensionCheckProcess);
      dimensionCheckProcesses.delete(container);
    }
    scrollSize.delete(container);
  };
}
const presets = [
  [ScrollOffset.Enter, "entry"],
  [ScrollOffset.Exit, "exit"],
  [ScrollOffset.Any, "cover"],
  [ScrollOffset.All, "contain"]
];
const stringToProgress = {
  start: 0,
  end: 1
};
function parseStringOffset(s) {
  const parts = s.trim().split(/\s+/);
  if (parts.length !== 2)
    return void 0;
  const a = stringToProgress[parts[0]];
  const b = stringToProgress[parts[1]];
  if (a === void 0 || b === void 0)
    return void 0;
  return [a, b];
}
function normaliseOffset(offset) {
  if (offset.length !== 2)
    return void 0;
  const result = [];
  for (const item of offset) {
    if (Array.isArray(item)) {
      result.push(item);
    } else if (typeof item === "string") {
      const parsed = parseStringOffset(item);
      if (!parsed)
        return void 0;
      result.push(parsed);
    } else {
      return void 0;
    }
  }
  return result;
}
function matchesPreset(offset, preset) {
  const normalised = normaliseOffset(offset);
  if (!normalised)
    return false;
  for (let i = 0; i < 2; i++) {
    const o = normalised[i];
    const p = preset[i];
    if (o[0] !== p[0] || o[1] !== p[1])
      return false;
  }
  return true;
}
function offsetToViewTimelineRange(offset) {
  if (!offset) {
    return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  }
  for (const [preset, name] of presets) {
    if (matchesPreset(offset, preset)) {
      return { rangeStart: `${name} 0%`, rangeEnd: `${name} 100%` };
    }
  }
  return void 0;
}
const timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
  const currentTime = { value: 0 };
  const cancel = scrollInfo((info) => {
    currentTime.value = info[options.axis].progress * 100;
  }, options);
  return { currentTime, cancel };
}
function getTimeline({ source, container, ...options }) {
  const { axis } = options;
  if (source)
    container = source;
  let containerCache = timelineCache.get(container);
  if (!containerCache) {
    containerCache = /* @__PURE__ */ new Map();
    timelineCache.set(container, containerCache);
  }
  const targetKey = options.target ?? "self";
  let targetCache = containerCache.get(targetKey);
  if (!targetCache) {
    targetCache = {};
    containerCache.set(targetKey, targetCache);
  }
  const axisKey = axis + (options.offset ?? []).join(",");
  if (!targetCache[axisKey]) {
    if (options.target && canUseNativeTimeline(options.target)) {
      const range = offsetToViewTimelineRange(options.offset);
      if (range) {
        targetCache[axisKey] = new ViewTimeline({
          subject: options.target,
          axis
        });
      } else {
        targetCache[axisKey] = scrollTimelineFallback({
          container,
          ...options
        });
      }
    } else if (canUseNativeTimeline()) {
      targetCache[axisKey] = new ScrollTimeline({
        source: container,
        axis
      });
    } else {
      targetCache[axisKey] = scrollTimelineFallback({
        container,
        ...options
      });
    }
  }
  return targetCache[axisKey];
}
function attachToAnimation(animation, options) {
  const timeline = getTimeline(options);
  const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
  const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
  return animation.attachTimeline({
    timeline: useNative ? timeline : void 0,
    ...range && useNative && {
      rangeStart: range.rangeStart,
      rangeEnd: range.rangeEnd
    },
    observe: (valueAnimation) => {
      valueAnimation.pause();
      return observeTimeline((progress2) => {
        valueAnimation.time = valueAnimation.iterationDuration * progress2;
      }, timeline);
    }
  });
}
function isOnScrollWithInfo(onScroll) {
  return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
  if (isOnScrollWithInfo(onScroll)) {
    return scrollInfo((info) => {
      onScroll(info[options.axis].progress, info);
    }, options);
  } else {
    return observeTimeline(onScroll, getTimeline(options));
  }
}
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
  if (!container)
    return noop;
  const optionsWithDefaults = { axis, container, ...options };
  return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
const createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
const isRefPending = (ref) => {
  if (!ref)
    return false;
  return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
  return {
    factory: (animation) => scroll(animation, {
      ...options,
      axis,
      container: (container == null ? void 0 : container.current) || void 0,
      target: (target == null ? void 0 : target.current) || void 0
    }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (v) => v,
    duration: 1
  };
}
function canAccelerateScroll(target, offset) {
  if (typeof window === "undefined")
    return false;
  return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
  const values = useConstant(createScrollMotionValues);
  if (canAccelerateScroll(target, options.offset)) {
    values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
    values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
  }
  const scrollAnimation = reactExports.useRef(null);
  const needsStart = reactExports.useRef(false);
  const start = reactExports.useCallback(() => {
    scrollAnimation.current = scroll((_progress, { x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container == null ? void 0 : container.current) || void 0,
      target: (target == null ? void 0 : target.current) || void 0
    });
    return () => {
      var _a;
      (_a = scrollAnimation.current) == null ? void 0 : _a.call(scrollAnimation);
    };
  }, [container, target, JSON.stringify(options.offset)]);
  useIsomorphicLayoutEffect(() => {
    needsStart.current = false;
    if (isRefPending(container) || isRefPending(target)) {
      needsStart.current = true;
      return;
    } else {
      return start();
    }
  }, [start]);
  reactExports.useEffect(() => {
    if (needsStart.current) {
      invariant(!isRefPending(container));
      invariant(!isRefPending(target));
      return start();
    } else {
      return;
    }
  }, [start]);
  return values;
}
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const { isStatic } = reactExports.useContext(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = reactExports.useState(initial);
    reactExports.useEffect(() => value.on("change", setLatest), []);
  }
  return value;
}
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach((unsubscribe) => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
  if (isOutputMap) {
    return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
  }
  const outputRange = outputRangeOrMap;
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
  const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
  if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && (options == null ? void 0 : options.clamp) !== false) {
    result.accelerate = {
      ...inputAccelerate,
      times: inputRangeOrTransformer,
      keyframes: outputRangeOrMap,
      isTransformed: true,
      ...{}
    };
  }
  return result;
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
  const keys2 = useConstant(() => Object.keys(outputMap));
  const output = useConstant(() => ({}));
  for (const key of keys2) {
    output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
  }
  return output;
}
const STATS = [
  { value: "500+", label: "Brands Served" },
  { value: "100%", label: "Fully Custom" },
  { value: "48h", label: "Quick Turnaround" }
];
const BUBBLES = [
  { id: "b1", size: 12, left: 10, top: 20, dur: 3, delay: 0 },
  { id: "b2", size: 20, left: 24, top: 45, dur: 3.8, delay: 0.5 },
  { id: "b3", size: 28, left: 38, top: 22, dur: 4.6, delay: 1 },
  { id: "b4", size: 36, left: 52, top: 60, dur: 5.4, delay: 1.5 },
  { id: "b5", size: 44, left: 66, top: 35, dur: 4.2, delay: 2 },
  { id: "b6", size: 52, left: 80, top: 55, dur: 5, delay: 2.5 }
];
function scrollTo(id) {
  var _a;
  (_a = document.querySelector(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
}
function HeroSection() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const bottleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      ref,
      className: "relative min-h-screen flex items-center overflow-hidden",
      "data-ocid": "hero.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,oklch(0.55_0.2_200/0.18),transparent)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_80%,oklch(0.62_0.22_200/0.12),transparent)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute top-20 right-[5%] w-64 h-64 rounded-full bg-primary/8 blur-3xl",
            animate: { scale: [1, 1.2, 1], x: [0, 20, 0] },
            transition: {
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-accent/10 blur-3xl",
            animate: { scale: [1, 0.85, 1], y: [0, -30, 0] },
            transition: {
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2
            }
          }
        ),
        BUBBLES.map((bubble) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute rounded-full bg-primary/10 border border-primary/20",
            style: {
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`
            },
            animate: { y: [0, -(bubble.size + 12), 0], opacity: [0.4, 0.8, 0.4] },
            transition: {
              duration: bubble.dur,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: bubble.delay
            }
          },
          bubble.id
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              style: { y: textY, opacity: heroOpacity },
              className: "text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6",
                    "data-ocid": "hero.badge",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
                      "Premium B2B Customization"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.05 },
                    className: "mb-4 space-y-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-primary via-accent-bright to-primary bg-clip-text text-transparent drop-shadow-[0_0_18px_oklch(0.62_0.22_200/0.55)]", children: "Your Brand. Every Sip." }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body font-semibold text-base sm:text-lg text-muted-foreground tracking-wide", children: "Where Custom Meets Premium." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.1 },
                    className: "font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6",
                    "data-ocid": "hero.headline",
                    children: [
                      "Craft Your",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-accent-bright relative", children: [
                        "Brand's",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 right-0 h-1 bg-primary/40 rounded-full" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-bright", children: "Signature" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "Bottle"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.2 },
                    className: "text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg font-body",
                    "data-ocid": "hero.subheadline",
                    children: "Elevate every sip. Custom-branded recyclable water bottles for hotels, cafes, and businesses — at unbeatable rates. Your logo. Your story. Every bottle."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.3 },
                    className: "flex flex-wrap gap-3 mb-8",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Recycle, { className: "w-4 h-4 text-primary" }),
                        " 100% Recyclable"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-primary" }),
                        " B2B Specialists"
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.4 },
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => scrollTo("#inquiry"),
                          className: "group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-elevated hover:shadow-glow-aqua hover:scale-105 transition-all duration-300",
                          "data-ocid": "hero.cta_primary_button",
                          children: [
                            "Start Customizing",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => scrollTo("#compare"),
                          className: "flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary/30 text-primary font-bold text-base hover:bg-primary/5 hover:border-primary/60 transition-all duration-300",
                          "data-ocid": "hero.cta_secondary_button",
                          children: "See Comparison"
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.55 },
                    className: "mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-border",
                    children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "text-center sm:text-left",
                        "data-ocid": "hero.stat",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-2xl sm:text-3xl text-accent-bright", children: stat.value }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground font-semibold mt-0.5", children: stat.label })
                        ]
                      },
                      stat.label
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center lg:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              style: { y: bottleY, rotate: bottleRotate },
              className: "relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full bg-primary/15 blur-2xl animate-glow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-16 rounded-full bg-primary/25 blur-xl animate-glow",
                    style: { animationDelay: "0.5s" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.img,
                  {
                    src: "/assets/generated/hero-bottle.dim_800x900.png",
                    alt: "Aqua Ownn premium custom water bottle",
                    className: "relative w-64 sm:w-80 lg:w-96 xl:w-[420px] h-auto object-contain drop-shadow-2xl animate-float",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: {
                      duration: 0.9,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 100
                    },
                    "data-ocid": "hero.bottle_image"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    className: "absolute top-8 -right-4 sm:-right-8 glass-card rounded-2xl px-4 py-3 shadow-elevated",
                    animate: { y: [0, -8, 0] },
                    transition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-primary uppercase tracking-wide", children: "Custom Label" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-foreground", children: "Your Brand Here" })
                    ]
                  }
                )
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1",
            animate: { opacity: [0.5, 1, 0.5] },
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-medium", children: "Scroll to explore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "w-1.5 h-2 rounded-full bg-primary",
                  animate: { y: [0, 12, 0] },
                  transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY }
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  HeroSection as default
};
