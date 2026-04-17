const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroSection-DMDjqoPS.js","assets/index-Dvwu-T9G.js","assets/index-BmzyKNdE.css","assets/proxy-BP_ChBL_.js","assets/createLucideIcon-bMRtb0YX.js","assets/recycle-Bo-bTYLV.js","assets/CompareSection-B6ksLQr5.js","assets/useScrollPosition-DDE3F8aK.js","assets/WhyUsSection-DGG57uzh.js","assets/InquirySection-Ki-FyFYh.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload } from "./index-Dvwu-T9G.js";
const HeroSection = reactExports.lazy(() => __vitePreload(() => import("./HeroSection-DMDjqoPS.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0));
const CompareSection = reactExports.lazy(
  () => __vitePreload(() => import("./CompareSection-B6ksLQr5.js"), true ? __vite__mapDeps([6,1,2,7,3,4]) : void 0)
);
const WhyUsSection = reactExports.lazy(() => __vitePreload(() => import("./WhyUsSection-DGG57uzh.js"), true ? __vite__mapDeps([8,1,2,7,3,4,5]) : void 0));
const InquirySection = reactExports.lazy(
  () => __vitePreload(() => import("./InquirySection-Ki-FyFYh.js"), true ? __vite__mapDeps([9,1,2,7,3,4]) : void 0)
);
const SectionFallback = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" }) });
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareSection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquirySection, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUsSection, {}) })
  ] });
}
export {
  HomePage as default
};
