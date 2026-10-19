import Image from "next/image";


export default function HeroSection() {
  return (
    <>
    <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
                <div className="c">
                    <p className="text-sm font-semibold text-violet-700 bg-sky-200 rounded-md w-52 text-center mt-12">Get To Know Us More</p>
                </div>
                        <p className="text-3xl font-bold my-10">eGovernance+ by Quality Care Counts</p>

                <div className="flex justify-between items-start gap-8">
                    <div className="space-y-12">
                        <h1 className="text-7xl font-bold">My Story</h1>
                        <p className="">I&apos;m Jean, the CEO and Founder of eGovernance+</p>
                        <p className="">My journey along the quality, governance and compliance route began when I entered the nursing profession. I naturally have a keen eye for detail. This, coupled with my passion for high quality healthcare for those who use health and social care services, I veered towards quality-type roles, where I could support clinical teams in making changes and improvements in service provision. In the main, I worked with enthusiastic staff who were determined to make a real difference to people in their care.</p>
                        <p className="c">I also encountered teams demoralised from the fallout after receiving a poor CQC inspection rating.  I started to see a pattern amongst providers whereby having made improvements to meet regulatory requirements, complacency set in, leading to a decline in performance. Invariably, this attitude stores up trouble for later, as when re-inspected, and a poor rating is awarded, providers face a crisis yet again, often under the threat of enforcement action; and so, the vicious cycle continues.</p>
                        <p className="c">I wanted to help providers exit this &quot;hamster wheel&quot; and empower them to provide consistently high-quality healthcare and meet regulatory standards.</p>
                        <p className="c"></p>
                    </div>
                    <div className="c">
                        <Image
                        src={""}
                        width={400}
                        height={400}
                        alt="Hero Image"
                        className="bg-violet-100 h-[70dvh] w-auto rounded-md"
                        />
                    </div>
                </div>
                <div className="max-w-5xl mx-auto space-y-6 mt-12">
                    <p className="leading-6">Here are some of the issues I&apos;ve come across leading to non-compliance: </p>
                    <div className="c">
                        <ul className="list-disc space-y-6">
                            <li>Cultural Barriers: A culture that does not prioritise organisational learning, accountability, or patient-centred care, prevents providers from adapting to best practices and improving compliance.</li>
                            <li>Ineffective Performance Monitoring: Lack of systems to monitor performance against standards can lead to unrecognised deficiencies and a failure to address issues proactively.</li>
                            <li>Limited Use of Technology: Failure to adopt or effectively utilise technology for governance reporting, data management and communication, and can hinder operational efficiency and quality of care.</li>
                            <li>Emphasis on Compliance Over Quality: A focus on merely meeting regulatory requirements without striving for excellence can lead to minimum standards being met rather than a commitment to high-quality care.</li>
                        </ul>
                    </div>
                </div>
                    <div className="space-y-12 mt-12">
                        <p className="c">Recognising these patterns and issues is crucial for health and social care providers aiming to improve their performance and compliance with CQC standards. By addressing these challenges proactively, organisations can foster a culture of continuous improvement and enhance the quality of care delivered to service users.</p>
                        <p className="c">As a governance professional and CQC Specialist Advisor with a wealth of experience of leading on significant changes and improvements in the NHS and independent sector, I wanted to reach out and help serve more providers to deliver the best quality health and care to service users.</p>
                        <p className="c">So, in 2018, I took a leap of faith and decided to set up my own consultancy business, and Quality Care Counts was conceived. Two years later the global pandemic hit, which transformed our reliance on digital solutions.</p>
                        <p className="c">Fast forward to 2024, our flagship product, the eGovernance+ software, was launched. It revolutionises quality monitoring and governance by automating processes and eliminating the need for outdated spreadsheets. This system was developed to meet the evolving needs of our clients. And here we are today!</p>
                    </div>
                
            </div>
        </section>
    </>
  )
}
