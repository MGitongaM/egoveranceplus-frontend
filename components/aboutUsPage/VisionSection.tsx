import Image from "next/image";

export default function VisionSection() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="flex justify-between items-start gap-8 py-40">
            <div className="space-y-12">
              <h1 className="text-3xl font-bold">Vision</h1>
              <p className="leading-7">
                At eGovernance+, our mission is to empower health and care
                providers to achieve and sustain the highest standards of
                quality and compliance. Our work with clients is guided by our
                primary underpinning values of integrity and partnership. We are
                dedicated to fostering a culture of excellence that innovates
                and upholds humanitarian values. We partner with our clients to
                navigate the complexities of regulatory requirements, protect
                their reputations, and ensure the delivery of safe, effective
                care for all.
              </p>
              <p className="leading-7">
                Our commitment to proactive governance and continuous
                improvement drives us to develop cutting-edge solutions that
                support our clients in their mission to provide compassionate,
                high-quality healthcare. Together, we strive to create a future
                where every health and care provider thrives, free from the
                risks of non-compliance and the resulting adverse consequences,
                where every health and care provider delivers exceptional
                high-quality care to all.
              </p>
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
        </div>
      </section>
    </>
  );
}
