import Image from "next/image";


export default function GetInTouchSection() {
  return (
    
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 min-h-[70dvh]">
          <div className="c">
            <p className="text-sm font-semibold text-violet-700 bg-sky-200 rounded-md w-52 text-center mt-12">
              GET IN TOUCH
            </p>
          </div>
          <h2 className="text-5xl font-bold mt-10">
            Request a demo
          </h2>
          <div className="flex justify-between items-center gap-8 py-20">
          
            <div className="w-full md:w-[50dvw]">
              <Image
                src={"https://www.egovernanceplus.com/wp-content/uploads/2024/01/request-software-demo-hybrid-screen-193325207.scale_.jpg"}
                width={400}
                height={400}
                alt="Compliance Image"
                className="bg-violet-100 h-full w-full object-cover object-center rounded-md"
              />
            </div>
            <div className="w-full md:w-[50dvw]">
                <p className="text-center">contact form</p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
