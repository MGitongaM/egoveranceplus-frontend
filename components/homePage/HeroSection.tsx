import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


export default function HeroSection() {
  return (
    <>
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
                <div className="c">
                    <p className="text-sm font-semibold text-violet-700 bg-sky-200 rounded-md w-52 text-center mt-12">GOVERANCE SOFTWARE</p>
                </div>
                <div className="flex justify-between items-center gap-8">
                    <div className="space-y-12">
                        <h1 className="text-7xl font-bold">INTRODUCING THE <br/> eGovernance+ <br/> 7-STEP CYCLE</h1>
                        <p className="text-2xl font-bold">How to elevate CQC compliance and achieve standards for Good Governance in just 90 days!</p>
                        <p className="text-lg font-bold">Did you know that Regulation 17 (Good Governance) of the Health & Social Care Act is the most highly breached of all regulations?</p>
                    </div>
                    <div className="c">
                        <Image
                        src={"https://www.egovernanceplus.com/wp-content/uploads/2026/04/Homepageintroducingthe7stepcycle-hero-image.png"}
                        width={400}
                        height={400}
                        alt="Hero Image"
                        // className="bg-violet-100 h-[50dvh] w-[70dvw] rounded-full"
                        className="bg-violet-100 object-cover object-center h-[60dvh] w-[70dvw] rounded-full"
                        />
                    </div>
                </div>
                <div className="max-w- mr-auto space-y-6 mt-12">
                    <p className="leading-6">Many providers don&apos;t realise this, but it&apos;s true. It may well be that you are doing the work to meet regulatory standards already, but your systems and processes let you down as you cannot evidence your progress effectively. </p>
                    <p className="leading-7">What you need to achieve and evidence CQC compliance is an effective digital governance solution, that will strengthen your governance systems and processes, demonstrating how the service is improving; whilst delivering sustainable, high quality care all year round, enabling you to meet expected standards.</p>
                    <p className="leading-7">eGovernance+ is a pioneering software solution designed to provide a structured, systematic approach to governance within your organisation. The platform utilises a comprehensive 7-step Cycle, empowering users to effectively monitor the quality of service delivery and drive ongoing improvements, resulting in sustainable, high-quality care outcomes.</p>
                    <p className="leading-7">This digital governance solution is ideally suited for CQC-registered providers seeking to meet regulatory standards for Good Governance. The 7-step cycle automates essential systems and processes, supporting robust governance and ensuring safe and effective care for all service users.</p>
                    <p className="leading-7">With eGovernance+ you&apos;ll have a powerful tool at your fingertips, giving you the ability to create a thriving culture of safety in your organisation.  </p>
                    <p className="leading-7">To join the revolution in governance today, just sign up to our 28-day free software trial using the link below.</p>
                </div>
                <div className="flex  items-center gap-8 mt-12">
                    <Button className="text-lg font-semibold text-slate-100 py-6 bg-violet-700 hover:bg-violet-800 hover:scale-105 transition-discrete">START 28-DAY FREE TRIAL <ArrowRight className="text-white"/></Button>
                    <Button variant="outline" className="text-lg font-semibold text-violet-700 py-6 border-violet-700 hover:bg-violet-200 hover:scale-105 transition-discrete">LEARN MORE</Button>
                </div>
            </div>
        </section>
    </>
  )
}
