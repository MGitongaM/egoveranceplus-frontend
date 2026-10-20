import HeroSection from "@/components/aboutUsPage/HeroSection";
import ValuesSection from "@/components/aboutUsPage/ValuesSection";
import VisionSection from "@/components/aboutUsPage/VisionSection";
import { Suspense } from "react";


export default function AboutUsPage() {
  return (
    <>
    <Suspense fallback={<p className="min-h-[50dvh] text-center animate-pulse grid place-content-center">Loading...</p>}>
        <HeroSection/>
    </Suspense>
    <Suspense fallback={<p className="min-h-[50dvh] text-center animate-pulse grid place-content-center">Loading...</p>}>
        <VisionSection/>
    </Suspense>
    <Suspense fallback={<p className="min-h-[50dvh] text-center animate-pulse grid place-content-center">Loading...</p>}>
        <ValuesSection/>
    </Suspense>
    </>

  )
}
