import BlogsSection from "@/components/blogPage/BlogsSection";
import { Suspense } from "react";


export default function page() {
  return (
    <>
    <Suspense fallback={<p className="min-h-[50dvh] text-center animate-pulse grid place-content-center">Loading...</p>}>
        <BlogsSection/>
    </Suspense>
    </>
  )
}
