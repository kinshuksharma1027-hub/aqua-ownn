import { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("../components/sections/HeroSection"));
const CompareSection = lazy(
  () => import("../components/sections/CompareSection"),
);
const WhyUsSection = lazy(() => import("../components/sections/WhyUsSection"));
const InquirySection = lazy(
  () => import("../components/sections/InquirySection"),
);

const SectionFallback = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
  </div>
);

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CompareSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <InquirySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyUsSection />
      </Suspense>
    </>
  );
}
