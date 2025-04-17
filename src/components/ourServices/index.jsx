import { useRef } from "react";
import electricals from "../../assets/electrical.jpg";
import HVAC from "../../assets/hvac.jpg";
import infra from "../../assets/infra.jpg";
import ELV from "../../assets/low-vol.jpg";


const OurServices = () => {
  const containerRef = useRef(null);

  const features = [
    {
      title: "Electricals",
      description:
        "We offer end-to-end electrical engineering services, from design to installation and maintenance, prioritizing safety, energy efficiency, and cost-effectiveness. Our team of experts delivers tailored solutions for residential, commercial, and industrial clients, ensuring customer satisfaction and long-lasting results.",
      items: [],
      image: electricals,
    },
    {
      title: "HVAC",
      description:
        "Our electrical engineering services ensure optimal HVAC system design and integration, delivering energy efficiency, comfort, and cost savings to our customers. We expertly handle installations, maintenance, and upgrades for enhanced performance and longevity.",
      items: [],
      image: HVAC,
    },
    {
      title: "Infrastructure",
      description:
        "We provide comprehensive electrical engineering solutions for infrastructure projects, including power distribution, lighting, and communication systems. Our expertise ensures safe, reliable, and efficient energy management for public and private sector clients, enhancing the value of their investments.",
      items: [],
      image: infra,
    },
    {
      title: "Extra Low Voltage",
      description:
        "Our electrical engineering services excel in designing and implementing extra low voltage (ELV) systems, ensuring seamless integration, safety, and reliability. We specialize in security, communication, and building automation solutions that enhance customer experience and optimize operational efficiency",
      items: [],
      image: ELV,
    },
  ];

  return (
    <div id="services" className="mt-10 overflow-x-hidden lg:px-[2rem]">
      <div className="border-b-2 border-blue-500 justify-self-center flex">
        <p className="text-center mt-5 text-4xl text-blue-500  ">
          Our Services
        </p>
      </div>{" "}
      {/* Removed mx-auto from here for better mobile handling */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Added container for responsiveness */}
        {features?.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-5 py-8 ${
              // Added py-8 for vertical spacing
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse" // Alternate image placement
            }`}
            ref={containerRef}
          >
            <div
              className="w-full lg:w-1/2" // Responsive widths
              // eslint-disable-next-line react/no-unknown-property
              uk-scrollspy={`cls: uk-animation-slide-${
                index % 2 === 0 ? "left" : "right"
              }; repeat: true; target: > div:nth-child(1); delay:300`}
            >
              <div>
                <h1 className="text-2xl lg:text-3xl text-blue-500 mb-4 leading-tight">
                  {section.title}
                </h1>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-4">
                  {section?.items?.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-5 p-4" // Reduced padding
                    >
                      <img src={item.icon} alt="" className="h-8 w-8" />{" "}
                      {/* Adjusted icon size */}
                      <p className="text-base lg:text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-1/2"
              // eslint-disable-next-line react/no-unknown-property
              uk-scrollspy={`cls: uk-animation-slide-${
                index % 2 === 0 ? "right" : "left"
              }; repeat: true; target: > div:nth-child(1); delay:300`}
            >
              <div>
                <img
                  src={section.image}
                  alt="Section Image"
                  className="w-full rounded-[12px] "
                />{" "}
                {/* Responsive image */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
