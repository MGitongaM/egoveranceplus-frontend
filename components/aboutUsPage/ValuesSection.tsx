import Image from "next/image";

export default function ValuesSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          {/* <div className="flex justify-between items-start gap-8 py-40"> */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 py-40">
            <div className="col-span-12 md:col-span-7 space-y-12">
              <h1 className="text-3xl font-bold">Values</h1>
              <div className="c">
                <ul className="list-disc space-y-6 leading-7">
                  <li>
                    Partnerships - we believe strong partnerships produce the
                    best results. Knowledge exchange and vibrant communication
                    ensures we are continually evolving to deliver you a
                    high-quality service. Partnership is at the core of our
                    relationship with clients. We listen and adapt, working in
                    true harmony with them.
                  </li>
                  <li>
                    Passionate - we are passionate about high quality health
                    care. We place our clients at the centre of what we do and
                    work enthusiastically to ensure providers are successful.
                  </li>
                  <li>
                    Integrity - always committed to act with the utmost
                    integrity at all times. We will always communicate openly
                    and honestly, without fear or favour. Our
                    straightforward,ethical approach ensures you can place the
                    fullest reliance on our judgement and the services we
                    deliver.
                  </li>
                  <li>
                    Innovative - we are a dynamic business, excited by fresh
                    possibilities on the horizon, and always seeking out new and
                    more effective methods of delivery. We will provide a
                    flexible, experienced and high-quality service when you want
                    it, where you want it, and how you want it.
                  </li>
                  <li>
                    Customer-focused - our clients are at the heart and centre
                    of what we do. Our customer-focused approach helps us to
                    innovate, stay grounded, and shape our services to what
                    clients actually want, resulting in added value to their
                    businesses.
                  </li>
                  <li>
                    Empowering - we aim to empower our clients by adopting a
                    can-do attitude and offering professional guidance
                    engendering confidence. Our supportive approach leaves
                    clients feeling a sense of control and empowerment to make
                    well-informed business decisions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 min-h-[70dvh] w-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
