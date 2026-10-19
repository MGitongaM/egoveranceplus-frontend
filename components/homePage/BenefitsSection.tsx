import { MonitorCheck, StarPlus, UserShield } from "lucide-react";


export default function BenefitsSection() {
  return (
    <>
    <section className="bg-white 0">
        <div className="container mx-auto px-4 py-20 min-h-[20dvh]">
            <div className="bg-violet-900 text-slate-100 container mx-auto rounded-lg px-4 lg:px-16 py-8">
                <p className="text-center">Aligned with the care quality commission strategy for &quot;Safety through Learning&quot;, eGoverance+ can deliver the following benefits:</p>
                <div className="flex justify-center items-center gap-8 mt-12">
                    <div className="flex gap-4 ">
                        <UserShield className="text-slate-100 size-40 -mt-14"/>
                        <div className="flex flex-col">
                            <p className="text-sm font-extrabold">Goverance Framework</p>
                            <p className="text-sm text-balance leading-6 mt-4">Comprises quality and risk management tools includes clinical audits, supervision, appraisals, training and development matrices with governance reporting feature and improvement plan template.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <MonitorCheck className="text-slate-100 size-40 -mt-14"/>
                        <div className="flex-col">
                            <p className="text-sm font-extrabold">Quality Monitoring</p>
                            <p className="text-sm text-balance leading-6 mt-4">Integrates all strands of quality monitoring into a seamless digital system, enabling our clients to meet Regulation 17 - Good Goverance.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <StarPlus className="text-slate-100 size-40 -mt-14"/>
                        <div className="flex-col">
                            <p className="text-sm font-extrabold">Continuous Improvement and Sustainability</p>
                            <p className="text-sm text-balance leading-6 mt-4">Provides on going quality improvements and assurance to providers and stakeholders of high quality and sustainable healthcare for your service user group.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
