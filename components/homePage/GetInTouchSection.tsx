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
          
            <div className="c">
              <Image
                src={""}
                width={400}
                height={400}
                alt="Compliance Image"
                className="bg-violet-100 h-[70dvh] w-auto rounded-md"
              />
            </div>
            <div className="c">
                <p className="text-center">contact form</p>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
