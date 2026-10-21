import { GitCompareArrowsIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function GetToKnowUsSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="c">
            <p className="text-sm font-semibold text-violet-700 bg-sky-200 rounded-md w-52 text-center mt-12">
              GET TO KNOW US
            </p>
          </div>
          <h2 className="text-5xl font-bold mt-10">
            Proactive approach to compliance
          </h2>
          <div className="flex justify-between items-center gap-8 py-20">
            <div className="flex flex-col gap-12 w-full lg:w-[50dvw]">
                <div className="grid grid-cols-12 gap-8">
                <ShieldCheck className="block col-span-2 text-violet-700 size-20" />
                <div className="col-span-10 space-y-2">
                    <p className="text-lg font-bold">
                    Non compliance -why take the risk
                    </p>
                    <p className="text-sm leading-6 ">
                    There are high costs associated with poor governance and
                    non-compliance. Of most concern to providers is enforcement
                    action namely, CQC imposed sanctions and fines, which can be
                    hand down by the regulator where regulation breaches are
                    found. Or still worse still, prosecution leading to closure of
                    the service and ultimate ruin.
                    </p>
                </div>
                </div>
                <div className="grid grid-cols-12 gap-8">
                <GitCompareArrowsIcon className="block col-span-2 text-violet-700 size-20" />
                <div className="col-span-10 space-y-2">
                    <p className="text-lg font-bold">
                    Be proactive
                    </p>
                    <p className="text-sm leading-6 ">
                    The minority of providers work closely with consultants on a regular basis. Many contact us in crisis, in many cases this involves breach of regulations with numerous actions required to achieve comliance.
                    </p>
                    <p className="text-sm leading-6 ">
                    We believe that is to late. So, get proactive and contact us today.
                    </p>
                </div>
                </div>

            </div>
            <div className="w-full lg:w-[50dvw]">
              <Image
                src={"https://www.egovernanceplus.com/wp-content/uploads/2025/07/Proactive-Compliance-–-eGovernance-1.jpg"}
                width={400}
                height={400}
                alt="Compliance Image"
                className="bg-violet-100 h-[70dvh] w-full object-cover object-center rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
