import Image from "next/image";

export default async function VisionSection() {
  const data = await fetch(
    `${process.env.WP_URL}/wp-json/wp/v2/about-page-section`,
  );
  const aboutPageData = await data.json();
  const {
    vision_section_heading_,
    vision_section_text_one_,
    vision_section_image_,
  } = aboutPageData[0].acf;

  // console.log("VISION", data);
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="flex justify-between items-center gap-8 py-20">
            <div className="space-y-12">
              <h1 className="text-3xl font-bold">{vision_section_heading_}</h1>
              <div className="prose" dangerouslySetInnerHTML={{__html:vision_section_text_one_}}></div>
            </div>
            <div className="c">
              <Image
                src={vision_section_image_.url}
                width={200}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 h-[40dvh] w-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
