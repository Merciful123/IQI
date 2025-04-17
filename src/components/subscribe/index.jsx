import "./index.css";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";


const JoinWaitlist = () => {
  
  return (
    <div className="pt-[80px] md:pt-[150px]" id="contact-us">
      <div
        className="w-full bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% py-16 md:py-24"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-top; target: .uk-card; delay: 300; repeat: true"
      >
        <div className=" max-w-[800px] mx-auto px-5 text-center uk-card">
          <h2 className="text-2xl md:text-4xl font-bold text-black-500 mb-4">
            Have a Project In Mind?
          </h2>
          <p className="text-xl md:text-xl text-white mb-8 font-dmsans">
            Let's building your next gorgeous complex now
          </p>
          <div className="flex flex-col min-lg:flex-row gap-4 justify-center items-center mt-2 ">
            <div>{<MdOutlineHomeWork size={30} color="black" />}</div>
            <p className="text-black">
              House No-C-560, Aman Apartment, Madanpur Khadar Extension, South
              Delhi, Delhi, India, 110076
            </p>
          </div>

          <div className="flex flex-col min-lg:flex-row gap-4 justify-center items-center mt-2">
            <div>{<MdOutlineMarkEmailRead size={30} />}</div>
            <p className="text-black">Info.msdengg@gmail.com</p>
          </div>
          <div className="flex flex-col min-lg:flex-row gap-4 justify-center items-center mt-2 ">
            <div>{<FaPhoneFlip size={30} />}</div>
            <p className="text-black">+91-91999-79781 </p>
            <p className="text-black">+91-99340-35253</p>
          </div>
          {/* <form className="flex flex-col md:flex-row gap-3 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full md:w-[400px] px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Join Waitlist
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
