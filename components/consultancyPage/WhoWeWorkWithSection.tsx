import { Hospital } from "lucide-react";

export default function WhoWeWorkWithSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[50dvh] py-20">
          <h2 className="text-3xl text-center font-bold my-10">
            Who We Work With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-start gap-12">
            <div className="bg-violet-200 rounded-md px-4 py-16 min-h-72">
              <div className="flex items-center gap-2">
                <Hospital className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Independent Medical Services
                </p>
              </div>
              <p className="text-sm leading-6">
                We assist clinics and GP practices with CQC compliance, clinical
                governance, and readiness for CQC inspections, so you can focus
                on delivering excellent care.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-16 min-h-72">
              <div className="flex items-center gap-2">
                <Hospital className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  New Entrants to the Sector
                </p>
              </div>
              <p className="text-sm leading-6">
                Starting a new care service? We offer end-to-end support
                Including CQC registration, policy documentation, and governance
                setup to help you launch with confidence.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-16 min-h-72">
              <div className="flex items-center gap-2">
                <Hospital className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Care Homes & Nursing Homes{" "}
                </p>
              </div>
              <p className="text-sm leading-6">
                We support residential care providers with governance tools, CQC
                compliance consultancy, and quality monitoring to ensure safe,
                person centered care.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-16 min-h-72">
              <div className="flex items-center gap-2">
                <Hospital className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Domiciliary & Home Care Services
                </p>
              </div>
              <p className="text-sm leading-6">
                Whether you&apos;re delivering care at home or in the community,
                we help streamline governance manage risk, and stay
                inspection-ready with ease.
              </p>
            </div>
            <div className="bg-violet-200 rounded-md px-4 py-16 min-h-72">
              <div className="flex items-center gap-2">
                <Hospital className="text-violet-700 size-10" />
                <p className="text-base font-semibold">
                  Supported Living Providers
                </p>
              </div>
              <p className="text-sm leading-6">
                Our services help supported living teams promote independence
                while maintaining robust safeguarding, compliance, and
                regulatory alignment.
              </p>
            </div>
            <div className="c"></div>
          </div>

          <div className="max-w-5xl mx-auto rounded-md my-40 px-4 py-16 min-h-72 space-y-12 bg-violet-900 text-slate-100">
            <p className="text-lg font-bold text-center">
              Let&apos;s Strengthen Your Compliance & Quality Together
            </p>
            <p className="text-sm leading-6">
              At Governance+, we partner with health and social care providers
              across the UK to simplify compliance and drive continuous quality
              improvement. Our expert consultancy services go beyond one off
              fixes; we help build robust governance systems, clarify complex
              CQC requirements, and support your team in delivering safe person
              centred care.
            </p>
            <p className="text-sm leading-6">
              Whether you&apos;re preparing for an inspection. improving internal
              processes, or launching a new service, we offer practical,
              tailored support that leads to lasting results. From audits to
              drafting improvement plans, we&apos;re here to strengthen your
              foundations and promote a culture of safety, learning,
              accountability, and excellence
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
