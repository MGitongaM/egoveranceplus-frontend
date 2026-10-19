export default function LocationSection() {
  return (
    <>
      <section className="bg-white min-h-[70dvh] py-40">
        <div className="max-w-7xl mx-auto px-4 ">
          {/* <div className="flex justify-between items-start gap-8 py-20"> */}
          <div className="max-w-xl mx-auto ">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Office Address</h2>
              <p className="text-2xl font-bold">London Office</p>
            </div>
            <ul className="list-disc space-y-6 py-20">
              <li>
                Quality Care Counts Consultancy Limited Trading as eGoverance+
                71-75 Shelton Street, Covent Garden London WC2H9JQ
              </li>
              <li className="text-fuchsia-700 font-medium">+44 333 0147113</li>
              <li className="text-fuchsia-700 font-medium">
                info@egoveranceplus.com
              </li>
            </ul>
          </div>
        </div>
        <div className="c">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9160522063125!2d-0.1235699!3d51.5147561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876058c7c9527fb%3A0x79bc7464573598c1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2ske!4v1792410845994!5m2!1sen!2ske"
            width="600"
            height="450"
            className="w-full min-h-[96]"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
