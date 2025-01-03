import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const marqueeTween = useRef(null);

  const marqueeItems = [
    { img: "https://via.placeholder.com/100", text: "Item 1" },
    { img: "https://via.placeholder.com/100", text: "Item 2" },
    { img: "https://via.placeholder.com/100", text: "Item 3" },
    { img: "https://via.placeholder.com/100", text: "Item 4" },
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
          duration: 10, // Adjust speed
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
    <div className="w-full overflow-hidden py-5 ">
      <div
        ref={marqueeRef}
        className="flex space-x-10 w-max"
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
