import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function TestimonialSection() {
  return (
    <>
      <section className="bg-white py-40">
        <div className="max-w-5xl mx-auto bg-violet-900 rounded-md flex justify-between items-center gap-8 px-4 py-6 mt-16">
          <Image
            src={"https://www.egovernanceplus.com/wp-content/uploads/2025/07/eGovernance-Software-Review.png"}
            width={400}
            height={400}
            alt="Testimonial Image"
            className="bg-violet-100 h-[20dvh] w-auto rounded-full"
          />
          <div className="">
            <div className="flex mb-10 pl-12">
              <Star className="text-yellow-500 size-4" />
              <Star className="text-yellow-500 size-4" />
              <Star className="text-yellow-500 size-4" />
              <Star className="text-yellow-500 size-4" />
              <Star className="text-yellow-500 size-4" />
            </div>
            <div className="px-12">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <p className="italic text-slate-100">
                      &quot;We&apos;ve been very happy with the services
                      provided by Quality Care Counts over the last year and
                      delighted with the increased insight it has given us into
                      the quality of care being delivered across our PFI Care
                      Homes. We are now able as a board to access the necessary
                      expertise in care provision which allows us to proactively
                      monitor and review the quality of service being provided
                      across our care homes, addressing a key business risk for
                      the company.&quot;
                    </p>
                    <div className="flex flex-col text-slate-100 mt-5">
                      <p className="text-sm italic font-bold">Keith Hawkins</p>
                      <p className="text-sm italic font-bold">
                        Ealing Care Aliance
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <p className="italic text-slate-100">
                      &quot; Jean Adamson joined our organisation in the run up
                      to a planned CQC inspection of our small mental health
                      trust. Her role was to work with us on ensuring CQC
                      compliance across our varied range of outpatient services
                      and on preparing us for our first well-led review. &quot;
                    </p>
                    <div className="flex flex-col text-slate-100 mt-5">
                      <p className="text-sm italic font-bold">Louise Lyon</p>
                      <p className="text-sm italic font-bold">NHS</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <p className="italic text-slate-100">
                      &quot; I have been very impressed with the service, the
                      mock inspections have been of great value, they were
                      comprehensive and detailed in content and the follow up
                      Action Plans have really helped us achieve improvements.
                      Jean is very supportive, open and honest about our
                      services and is easy to work with. I couldn&apos;t have
                      made a better choice as a consultant .&quot;
                    </p>
                    <div className="flex flex-col text-slate-100 mt-5">
                      <p className="text-sm italic font-bold">Janet Aldridge</p>
                      <p className="text-sm italic font-bold">
                        Care Home Owner
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <p className="italic text-slate-100">
                      &quot; On contacting QCC we found Jean professional and
                      very helpful. Jean was always on hand to any questions we
                      had big or small, nothing was too much. We couldn&apos;t have
                      done it without Jean guiding us and helping to improving
                      our service. Every company wants to offer the best service
                      possible, the best way possible and Jean has helped us do
                      this and we would have no problem recommend QCC.&quot;
                    </p>
                    <div className="flex flex-col text-slate-100 mt-5">
                      <p className="text-sm italic font-bold">Dave Sibley</p>
                      <p className="text-sm italic font-bold">
                        Nightingale Disabled Transport
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-fuchsia-400 bg-fuchsia-200" />
                <CarouselNext className="text-fuchsia-400 bg-fuchsia-200" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
