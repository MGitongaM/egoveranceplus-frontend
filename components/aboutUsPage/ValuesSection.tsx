import Image from "next/image";

export default async function ValuesSection() {
    const data = await fetch(`${process.env.WP_URL}/wp-json/wp/v2/about-page-section`);
  const aboutPageData = await data.json();
  const {
    
    values_section_heading,
    values_section_text_one,
    values_section_image,

  } = aboutPageData[0].acf;

  // console.log("VALUES",data)
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="flex justify-between items-center gap-8 py-10">
          {/* <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 py-40"> */}
            <div className="col-span-12 md:col-span-7 space-y-12">
              <h2 className="text-3xl font-bold">{values_section_heading}</h2>
              <div className="prose" dangerouslySetInnerHTML={{__html:values_section_text_one}}>
                {/* {values_section_text_one} */}
  
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Image
                src={values_section_image.url}
                width={400}
                height={400}
                alt="Hero Image"
                className="bg-violet-100 min-h-[60dvh] w-full lg:w-[32dvw]  rounded-md object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
