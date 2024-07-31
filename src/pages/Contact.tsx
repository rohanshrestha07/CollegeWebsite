import Footer from "../components/footer/Footer";

export default function Contact() {
  return (
    <>
      <div className="bg-white h-max py-5 mb-20">
        <div className="w-full container h-screen grid grid-flow-col grid-cols-2 gap-5 mx-auto ">
          <div className=" text-black contact-info px-5 mt-10 shadow-2xl h-max p-11 rounded-2xl">
            <div className="text-justify w-full pr-5">
              <h1 className="text-5xl text-[#6A2DE9] font-bold">
                Get in touch
              </h1>
              <p className="mt-4 font-semibold">
                We're here to help. Chat to our friendly team 24/7 and get set
                up and ready to go in just 5 minutes.
              </p>
              <div className="pt-8 w-full">
                <a
                  className="flex w-full text-[#6A2DE9] font-bold pb-1"
                  target="_blank"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=deepgeneral33@gmail.com"
                >
                  <img className="pr-2" src="./assets/mail.svg" alt="mail" />
                  Shoot us an email
                </a>
                <a
                  className="flex w-full text-[#6A2DE9] font-bold"
                  target="_blank"
                  href="https://www.linkedin.com/messaging/thread/2-ZjQwNGIyMWItMTY4Ny00NzIwLTg2ZDItN2QyNjJlYmMzYzBjXzAxMw==/"
                >
                  <img
                    className="pr-2"
                    src="./assets/linkedin.svg"
                    alt="linkedin"
                  />
                  Message us on LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-10 form w-full pr-5">
              <form action="#">
                <div className="w-full columns flex gap-5">
                  <div className="w-full">
                    <label className="flex w-full font-semibold">
                      First Name
                    </label>
                    <input
                      className="flex w-full bg-white border outline-none border-gray-500 p-2 rounded-lg"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-full">
                    <label className="flex w-full font-semibold">
                      Last Name
                    </label>
                    <input
                      className="flex w-full bg-white border outline-none border-gray-500 p-2 rounded-lg"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label className="flex w-full font-semibold">Email</label>
                  <input
                    className="flex w-full  bg-white border  outline-none border-gray-500 p-2 rounded-lg"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mt-2">
                  <label className="flex w-full font-semibold">
                    Phone Number
                  </label>
                  <input
                    className="flex w-full  bg-white border  outline-none border-gray-500 p-2 rounded-lg"
                    type="number"
                    placeholder="+(977)-000-0000000"
                  />
                </div>
                <div>
                  <a href="#">
                    <button className="bg-[#6D2DF6] p-2 w-full mt-8 rounded-lg font-semibold text-white">
                      SEND MESSAGE
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="pr-5 pl-1 py-5 mt-6 h-full">
            <iframe
              className="w-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.158525231676!2d85.3420219109075!3d27.712391325169932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970a9ff7041%3A0xfcaa45db29104458!2sTexas%20International%20College!5e0!3m2!1sen!2snp!4v1721697097685!5m2!1sen!2snp"
              width="600"
              height="600"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
