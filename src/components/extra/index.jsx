import { useEffect, useRef } from "react";
import gsap from "gsap";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const marqueeTween = useRef(null);

  const marqueeItems = [
    { img: image1, text: "Item 1" },
    { img: image2, text: "Item 2" },
    { img: image3, text: "Item 3" },
    { img: image1, text: "Item 4" },
  ];

  // Duplicate items for seamless scrolling
  const repeatedItems = [...marqueeItems, ...marqueeItems];

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeWidth = marqueeRef.current.scrollWidth; // Get total width of marquee content

      marqueeTween.current = gsap.fromTo(
        marqueeRef.current,
        { x: "100%" }, // Start from the right end (off-screen)
        {
          x: `-${marqueeWidth}px`, // Move to the left end (off-screen)
          duration: 12, // Adjust speed
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
    <div className="w-full overflow-hidden py-10 pb-12 border-1 border-blue-300 border-l-0 border-r-0 bg-transparent bg-blue-50 ">
      <p className="text-center mb-5 text-4xl text-blue-500 font-bold bg-gradient-to-r from-blue-300 via-blue to-cyan-300 text-transparent bg-clip-text">
        Our Clients
      </p>
      <div
        ref={marqueeRef}
        className="flex space-x-20 w-max"
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
            <p className="text-center mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
