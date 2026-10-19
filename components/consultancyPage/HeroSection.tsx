import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[50dvh] py-20">
          <h1 className="text-3xl font-bold my-10">
            Consultancy for CQC Compliance & Good Governance
          </h1>

          <div className="flex justify-between items-start gap-8">
            <div className="space-y-12">
              <p className="">
                At Governance+, we provide expert consultancy services for
                health and social care providers across the UK., helping you
                achieve CQC standards for good governance and compliance.
              </p>
              <p className="">
                Whether you&apos;re starting a new service, preparing for an
                inspection, or improving service quality, our tailored support
                ensures you&apos;re aligned with CQC regulations and sector best
                practices.
              </p>
              <p className="c">
                We go beyond ticking boxes; our consultancy focuses on building
                long term quality, safety, and accountability into your
                operations. From policy development and mock inspections to
                training and governance reviews, we offer practical, hands on
                guidance to help you remain inspection-ready and deliver
                consistently high standards of care.
              </p>
            </div>
            <div className="c">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[50dvh] w-[40dvw] rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
