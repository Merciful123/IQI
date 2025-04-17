import { useEffect, useRef } from "react";
import gsap from "gsap";
import ALIANZ from "../../assets/ALIANZ.jpg";
import AUDI from "../../assets/AUDI.jpg";
import AKUD from "../../assets/AUKD.jpg";
import CO from "../../assets/CO.jpg";
import GR from "../../assets/GR.jpg";
import SAC from "../../assets/SAC.jpg";
import SWEET from "../../assets/SWEET.jpg";
import SAVE from "../../assets/SAVE-SOLUTIONS.jpg";
import VIKAS from "../../assets/VIKAS.jpg";
import PARAS from "../../assets/PARAS.jpg";
import JH from "../../assets/JH.jpg";
import MH from "../../assets/MH.jpg";


const OurClients = () => {
  const marqueeRef = useRef(null);
  const marqueeTween = useRef(null);

  const marqueeItems = [
    {
      img: ALIANZ,
      text: "Allianz Office",
      location: "Noida,Uttar Pradesh",
    },
    {
      img: AUDI,
      text: "Auditorium",
      location: "Ghaziabad,Uttar Pradesh",
    },
    {
      img: AKUD,
      text: "AKUD Hospital",
      location: "Sonarpur, Assam",
    },
    {
      img: CO,
      text: "Corporate Office",
      location: "Noida,Uttar Pradesh",
    },
    {
      img: GR,
      text: "GR International Hotel",
      location: "Gaya, Bihar",
    },
    {
      img: SAC,
      text: "SAC Hospital",
      location: "Ranchi, Jharkhand",
    },
    {
      img: SWEET,
      text: "Sweets Cafe",
      location: "City Centre Mall Bahrain",
    },
    {
      img: SAVE,
      text: "Save Solutions",
      location: "Gaya, Bihar",
    },
    {
      img: VIKAS,
      text: "VIkas Minar",
      location: "ITO Delhi, New Delhi,Delhi",
    },
    {
      img: PARAS,
      text: "Paras Dews",
      location: "Gurgaon Haryana",
    },
    {
      img: JH,
      text: "Delhi, New Delhi",
      location: "Jamia Hamdard University",
    },
    {
      img: MH,
      text: "Medicare Hospital",
      location: "Gaya, Bihar",
    },
  ];

  // Duplicate items for seamless scrolling
  const repeatedItems = [...marqueeItems, ...marqueeItems];

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth; // Get total width of marquee content

      marqueeTween.current = gsap.fromTo(
        marqueeRef.current,
        { x: "5%" }, // Start from the right end (off-screen)
        {
          x: `-${marqueeWidth}px`, // Move to the left end (off-screen)
          duration: 60, // Adjust speed
          ease: "linear",
          repeat: -1,
        }
      );
    }

    return () => {
      marqueeTween.current?.kill();
    };
  }, []);

  // Pause on hover
  const handleMouseEnter = () => marqueeTween.current?.pause();
  const handleMouseLeave = () => marqueeTween.current?.play();

  return (
    <div id="projects" className="w-full overflow-hidden py-10 pb-12 border-1 border-blue-300 border-l-0 border-r-0 bg-transparent bg-blue-50 mt-10">
      <div className="border-b-2 border-blue-500 justify-self-center flex flex-col items-center">
        <p className="text-center mb-0 text-4xl text-blue-500  bg-clip-text">
          Our Projects
        </p>
      </div>
      <p className="px-10 mt-2 text-xl">
        Our diverse portfolio of projects showcases our expertise in electrical
        engineering services. We've successfully completed residential,
        commercial, and industrial assignments, including energy-efficient
        systems, automation, and smart infrastructure. Our commitment to
        excellence guarantees customer satisfaction and long-term value.
      </p>
      <div
        ref={marqueeRef}
        className="flex space-x-20 w-max mt-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={`Marquee ${index}`}
              className="w-[100px] h-[100px] rounded-3xl"
            />
            <p className="text-center mt-2 text-xl">{item?.text}</p>
            <p>{item?.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
