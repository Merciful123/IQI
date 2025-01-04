import logo from "../../assets/neevLogo.svg";
const Footer = () => {
  return (
    <div
      className="overflow-y-hidden bg-blue-200 py-10"
      // eslint-disable-next-line react/no-unknown-property
      uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"
    >
      <div className="grid grid-cols-[auto_1fr]   p-[2rem] uk-card overflow-y-hidden">
        <div className="flex gap-2 justify-center items-center">
          <img src={logo} alt="logo" />
          <div className="text-2xl">neev</div>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] place-items-center place-content-center gap-10 p-[2rem]">
          <div className="relative group  cursor-pointer">
            Career
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
          <div className="relative group cursor-pointer">
            Contact us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
          <div className="relative group cursor-pointer">
            Our centers
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
          <div className="relative group cursor-pointer">
            About us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
          <div className="relative group cursor-pointer">
            Book a call
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
          <div className="relative group cursor-pointer">
            Our journey
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
