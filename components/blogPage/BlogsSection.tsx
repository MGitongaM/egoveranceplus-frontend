import Image from "next/image";
import Link from "next/link";


export default async function BlogsSection() {
     const data = await fetch(
    `${process.env.WP_URL}/wp-json/wp/v2/posts`,
  );
  const blogPageData = await data.json();
//   const {
//     banner_heading,
//     main_heading,
//     section_one_text__source,
//     section_two_text,
//     section_three_text,
//     section_one_image,
//   } = aboutPageData[0].acf;
  console.log("BLOGS PAGE++>",blogPageData)



  return (
    <>
    <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 pb-40 min-h-[70dvh]">
              <div className="flex justify-between items-center gap-8 py-20">
                <div className="space-y-12">
                  <h1 className="text-3xl font-bold">Blogs</h1>
                  
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {blogPageData?.map((blog,index:number)=>(
                    <div key={index} className="min-h-[30dvh] w-full rounded-md border">
                        <div className="c">
                        <Image
                            // src={blog.eatured_media}
                            src={`${process.env.WP_URL}/wp-json/wp/v2/media/${blog.featured_media}`}
                            width={200}
                            height={400}
                            alt={`${blog.title.rendered} image`}
                            className="bg-violet-100 h-[20dvh] w-full object-cover object-center rounded-t-md"
                        />
                        </div>
                        <div className="px-4 py-8 space-y-4">
                            <Link href={blog.link}>
                                <h2 className="prose font-semibold" dangerouslySetInnerHTML={{__html:`${blog.title.rendered}`}}></h2>
                            </Link>
                            {/* <p className="c">{`${process.env.WP_URL}/wp-json/wp/v2/media/${blog.featured_media}`}</p>
                            <p className="c">{`${process.env.WP_URL}/wp-json/wp/v2/media/${blog.featured_media}.source_url`}</p> */}
                            
                            <div className="prose" dangerouslySetInnerHTML={{__html:`${blog.excerpt.rendered}`}}></div>
                        </div>

                    </div>
                ))}
              </div>
            </div>
          </section>
    </>
  )
}
