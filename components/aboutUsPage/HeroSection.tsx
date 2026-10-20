import Image from "next/image";


export default async function HeroSection() {
  const data = await fetch(
    `${process.env.WP_URL}/wp-json/wp/v2/about-page-section`,
  );
  const aboutPageData = await data.json();
  const {
    banner_heading,
    main_heading,
    section_one_text__source,
    section_two_text,
    section_three_text,
    section_one_image,
  } = aboutPageData[0].acf;

  

  return (
    <>
      
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
            <div className="c">
              <p className="text-sm font-semibold text-violet-700 bg-sky-200 rounded-md w-52 text-center mt-12">
                Get To Know Us More
              </p>
            </div>
            <p className="text-3xl font-bold my-10">{banner_heading}</p>

            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-8">
              <div className=" space-y-12">
                <h1 className="text-7xl font-bold">{main_heading}</h1>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{
                    __html: section_one_text__source.formatted_value,
                  }}
                >
                  {/* {section_one_text__source.formatted_value} */}
                </div>
              </div>
              <div className="c">
                <Image
                  src={section_one_image.url}
                  width={200}
                  height={400}
                  alt="Hero Image"
                  className="bg-violet-100 h-full lg:h-[80dvh] w-full lg:w-[50dvw] rounded-md object-cover object-top"
                />
              </div>
            </div>
            <div
              className="prose max-w-5xl mx-auto space-y-6 mt-12"
              dangerouslySetInnerHTML={{ __html: section_two_text }}
            >
              {/* {section_two_text} */}
            </div>
            <div
              className="prose max-w-5xl mx-auto space-y-12 mt-12"
              dangerouslySetInnerHTML={{ __html: section_three_text }}
            >
              {/* {section_three_text} */}
            </div>
          </div>
        </section>
    </>
  );
}
