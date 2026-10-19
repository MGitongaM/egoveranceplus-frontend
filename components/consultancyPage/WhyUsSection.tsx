import { Clipboard } from "lucide-react";

export default function WhyUsSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[50dvh] py-20">
          <h2 className="text-3xl text-center font-bold my-10">
            Why Choose Our Consultancy Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-12">
            <div className="bg-violet-200 rounded-md px-4 py-12">
              <div className="flex items-center gap-2">
                <Clipboard className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Tailored CQC Compliance Support
                </p>
              </div>
              <p className="text-sm leading-6">
                From registration to inspection readiness, we help you meet
                every CQC requirement. Our consultants work closely with
                providers to address gaps, align Regulation 17 (Good
                Governance). and reduce the risk of enforcement action.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-12">
              <div className="flex items-center gap-2">
                <Clipboard className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Practical, Hands On Guidance{" "}
                </p>
              </div>
              <p className="text-sm leading-6">
                We don&apos;t just offer advice, we walk you through every step.
                Whether It&apos;s audit support, risk management, or quality
                improvement, our consultancy provides real world solutions that
                make a measurable difference.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-12">
              <div className="flex items-center gap-2">
                <Clipboard className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Improve Service Quality & Outcomes{" "}
                </p>
              </div>
              <p className="text-sm leading-6">
                Trough focused quality audits, acton plans, and coaching, we
                help you identify weaknesses, draft improvement plans, build
                accountability, and promote a culture of safety and learning
                across your service.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-12">
              <div className="flex items-center gap-2">
                <Clipboard className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Save Time and Reduce Stress{" "}
                </p>
              </div>
              <p className="text-sm leading-6">
                Preparing for CQC Inspections or tackling compliance issues on
                your own can be overwhelming. Our consultancy simplifies the
                process, saving you time while increasing confidence.
              </p>
            </div>
            <div className="c"></div>
          </div>
        </div>
      </section>
    </>
  );
}
