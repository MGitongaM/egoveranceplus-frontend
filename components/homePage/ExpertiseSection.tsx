import { ArrowRight, BackpackIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ExpertiseSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="">
            <p className="text-sm font-semibold text-violet-700 bg-sky-200 rounded-md w-52 text-center mt-12">
              OUR EXPERTISE AREAS
            </p>
          </div>
          <h2 className="text-5xl font-bold mt-10">
            eGoverance+ services for CQC Compliance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="w-full bg-slate-100">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[20dvh] w-full rounded-t-md"
              />

              <BackpackIcon className="text-violet-800 size-12 -mt-8 " />
              <div className="mt-4 space-y-4 px-2 pb-16">
                <h3 className="text-sm font-bold mt-4">Governance Software</h3>
                <p className="text-sm leading-6 text-balance">
                  eGovernance+ is a unique and innovative software, which
                  provides you with a systematic approach to governance. It
                  supports CQC registered managers to monitor the quality of
                  their service.
                </p>
              </div>
            </div>
            <div className="w-full bg-slate-100">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[20dvh] w-full rounded-t-md"
              />

              <BackpackIcon className="text-violet-800 size-12 -mt-8 " />
              <div className="mt-4 space-y-4 px-2 pb-16">
                <h3 className="text-sm font-bold mt-4">Consultancy</h3>
                <p className="text-sm leading-7 text-balance">
                  We offer flexible access to consultancy services through
                  eGovernance+, which provides professional advice from our
                  Principal Governance Consultant to ensure CQC compliance.
                </p>
              </div>
            </div>
            <div className="w-full bg-slate-100">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[20dvh] w-full rounded-t-md"
              />

              <BackpackIcon className="text-violet-800 size-12 -mt-8 " />

              <div className="mt-4 space-y-4 px-2 pb-16">
                <h3 className="text-sm font-bold mt-4">
                  Service Quality Reviews
                </h3>
                <p className="text-sm leading-7 text-balance">
                  We are aligning our service reviews with CQC’s Single
                  Assessment Framework. We will audit your service using CQC
                  quality statements and evidence categories, providing a brief
                  report with recommendations.
                </p>
              </div>
            </div>
            <div className="w-full bg-slate-100">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[20dvh] w-full rounded-t-md"
              />

              <BackpackIcon className="text-violet-800 size-12 -mt-8 " />
              <div className="mt-4 space-y-4 px-2 pb-16">
                <h3 className="text-sm font-bold mt-4">CQC Registration</h3>
                <p className="text-sm leading-7 text-balance">
                  The process to register with the CQC is changing and coming
                  into line with the CQC&apos;s new Single Assessment Framework. We
                  are committed to our client&apos;s long-term success, and can
                  offer ongoing support to remain compliant once we have your
                  business successfully registered with the CQC.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto bg-violet-700 rounded-md flex justify-between items-center gap-8 px-4 py-6 mt-16">
                <div className="bg-violet-500 flex gap-12 rounded-md px-10 py-4">
                    <PhoneCall className="text-slate-100 size-20"/>
                    <div className="space-y-6">
                        <p className="font-bold text-slate-100">Call for more information</p>
                        <p className="font-bold text-slate-100">+44 333 0147113</p>
                    </div>
                </div>
                    <p className="text-center font-bold text-slate-100">Request a free consultation</p>
                    <Button className="bg-white hover:bg-violet-100 hover:scale-105 transition-discrete text-violet-700 text-xl font-bold py-8">Contact Us <ArrowRight className="text-violet-700"/></Button>
          </div>
        </div>
      </section>
    </>
  );
}
