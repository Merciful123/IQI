import logo from "../../assets/logo.jpg";

const Footer = () => {
  const footerLinks = [
    "Electrical",
    "Mechanical",
    "HVAC",
    "Extra Low Voltage",
    "Construction",
    "Infrastructure",
    "What We Do",
    "Our Projects",
    "Company Profile",
    "About Us",
    "Contact Us",
    "FAQ"
  ];

  return (
    <div
      className="bg-blue-200 py-10 overflow-hidden" // Removed unnecessary overflow-y-hidden
      // eslint-disable-next-line react/no-unknown-property
      uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"
    >
      <div className="container mx-auto px-4 uk-card">
        {" "}
        {/* Added container for responsiveness */}
        <div className="flex flex-col lg:flex-row items-center justify-around py-4">
          {" "}
          {/* Flexbox for layout */}
          <div className="flex items-center justify-center mb-4 lg:mb-0">
            {" "}
            {/* Added margin bottom for mobile */}
            <img src={logo} alt="logo" className="h-20 w-40" />{" "}
            {/* Set a height for the logo */}
            {/* <div className="text-2xl ml-2">neev</div>{" "} */}
            {/* Added margin left for spacing */}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 text-center">
            {" "}
            {/* Responsive grid */}
            {footerLinks.map((link, index) => (
              <div key={index} className="relative group cursor-pointer">
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
