import "./index.css";

const JoinWaitlist = () => {
  
  return (
    <div className="pt-[80px] md:pt-[150px]">
      <div
        className="w-full bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% py-16 md:py-24"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-top; target: .uk-card; delay: 300; repeat: true"
      >
        <div className=" max-w-[800px] mx-auto px-5 text-center uk-card">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Join the Future of Healthcare
          </h2>
          <p className="text-sm md:text-lg text-white/90 mb-8 font-dmsans">
            Be among the first to experience the next generation of healthcare
            technology
          </p>
          <form className="flex flex-col md:flex-row gap-3 justify-center items-center">
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
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
