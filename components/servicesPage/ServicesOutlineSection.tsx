import { BackpackIcon } from "lucide-react";
import Image from "next/image";

export default function ServicesOutlineSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
                <h3 className="text-lg font-bold mt-4">Governance Software</h3>
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
                <h3 className="text-lg font-bold mt-4">Consultancy</h3>
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
                <h3 className="text-lg font-bold mt-4">
                  Service Quality Reviews
                </h3>
                <p className="text-sm leading-7 text-balance">
                  We are aligning our service reviews with CQC&apos;s Single
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
                <h3 className="text-lg font-bold mt-4">
                  CQC Notices and Enforcement Action
                </h3>
                <p className="text-sm leading-7 text-balance">
                  At eGovernance+, we encourage providers to be proactive with
                  matters of CQC compliance. However should you find service
                  subject to breach of regulations, we can provide support to
                  respond to enforcement action.
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
                <h3 className="text-lg font-bold mt-4">
                  CQC Registration Support
                </h3>
                <p className="text-sm leading-7 text-balance">
                  The process to register with the CQC is changing and coming
                  into line with the CQC&apos;s new Single Assessment Framework.
                  We are committed to our client&apos;s long-term success, and
                  can offer ongoing support to remain compliant once we have
                  your business successfully registered with the CQC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
