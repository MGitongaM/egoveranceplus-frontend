import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          {/* <div className="flex justify-between items-start gap-8 py-20"> */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 py-20">
            <div className="col-span-12 md:col-span-7">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[70dvh] w-auto rounded-md"
              />
              <div className="space-y-2 mt-8">
                <p className="text-lg font-medium">
                  Book a free complimentary consultation
                </p>
                <Button className="w-96 text-lg font-semibold text-slate-100 py-6 bg-violet-700 hover:bg-violet-800 hover:scale-105 transition-discrete">
                  Book Consultation
                </Button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-6 mt-12">
              <h1 className="text-2xl font-bold">
                What are you most interested in
              </h1>
              <p className="">
                Please provide your contact details with a brief description of
                your inquiry below
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
