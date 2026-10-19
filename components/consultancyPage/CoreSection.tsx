import { ComputerIcon } from "lucide-react";


export default function CoreSection() {
  return (
    <>
    <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[50dvh] py-10">
          <h2 className="text-3xl text-center font-bold my-10">
                Our Core Consultancy Services
          </h2>

          <div className="">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ComputerIcon className="text-violet-700 size-14" />
                <p className="text-base ">
                  Governance+ Software: Designed for quality monitoring and CQC compliance. The software comprises quality and risk management tools. These include clinical audits, supervision, appraisal, training, and development matrices with governance reporting.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ComputerIcon className="text-violet-700 size-14" />
                <p className="text-base ">
                  Software Support: Our software subscribers will have access to professional advice from our principal governance consultant to support quality improvement and risk management, as well as technical support and maintenance.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ComputerIcon className="text-violet-700 size-14" />
                <p className="text-base ">
                  CQC Registration Consultancy: Support for health & social care providers to complete the CQC application process, with provision of supporting registration docs and policies. Includes 1:1 coaching to prepare the registered manager applicant for the CQC &quot;fit person&quot; interview.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ComputerIcon className="text-violet-700 size-14" />
                <p className="text-base ">
                  Mock COC Inspections & Audit Reviews: We conduct quality reviews/audits of provider services. Our audit methodology is aligned with that of the CQC, and we will provide a written report outlining recommendations and support the development of improvement plans where required.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ComputerIcon className="text-violet-700 size-14" />
                <p className="text-base ">
                  Governance & Risk Management: Professional advice on matters relating to CQC compliance, developing learning culture, good governance practices, quality, managing clinical risk, etc.
                </p>
              </div>
              
            </div>
           
            <div className="c"></div>
          </div>
        </div>
      </section>
    </>
  )
}
