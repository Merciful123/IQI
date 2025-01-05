import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import desktop from "../../assets/desktop.svg";

const AnimatedComponent = () => {
  // Use useRef for managing DOM elements references
  const leftTextRef = useRef(null);
  const circleRef = useRef(null);
  const rightTextRef = useRef(null);

  const leftTexts = ["overload", "redundancy", "burden", "complex", "inefficient"];
  const rightTexts = ["reducing overload", "saving time", "precision", "smart work", "perfection"];

  useEffect(() => {
    // GSAP Stagger Animation for Left Texts (Falling below the circle and then moving to the circle)
    if (leftTextRef.current) {
      gsap.fromTo(
        leftTextRef.current.children,
        { x: -200, opacity: 1, scale: 1 },
        {
          x: circleRef.current ? circleRef.current.offsetTop +  0 : 0, // Fall below the circle
          opacity: 0,
          scale: 0.2, // Shrink the text as it reaches the circle
          stagger: 0.5,
          delay: 5,
          duration: 5,
          repeat: -1, // Repeat infinitely
          yoyo: false, // Do not reverse the animation
          onComplete: () => {
            // Add a 1-second pause before restarting the animation
            setTimeout(() => {
              gsap.fromTo(
                leftTextRef.current.children,
                { x: -200, opacity: 1, scale: 1 },
                {
                  x: circleRef.current ? circleRef.current.offsetTop +0 : 0, // Fall below the circle
                  opacity: 0,
                  scale: 0.5, // Shrink the text as it reaches the circle
                  stagger: 1,
                  delay:5,
                  duration: 1,
                  repeat: -1,
                  yoyo: false,
                }
              );
            }, 1000); // Wait 1 second before restarting the animation
          },
        }
      );
    }

    // GSAP Rotation Animation for the Circle (infinite rotation)
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        y: "20px", // Move to the right by 100px
        repeat: -1, // Infinite movement
        duration: 3, // Duration of one complete movement (left to right and back)
        ease: "power1.inOut", // Smooth easing effect
        yoyo: true, // Make the movement reverse, so it goes left-right
      });
    }

    // GSAP Animation for Right Texts (appears from circle repeatedly)
    if (rightTextRef.current) {
      gsap.fromTo(
        rightTextRef.current.children,
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.5,
          duration: 2,
          delay: 10,
          repeat: -1, // Infinite repetition
          yoyo: true, // Reverses the animation
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center w-full min-h-[90vh] px-4 overflow-x-hidden">
      {" "}
      {/* Added flex-col for mobile */}
      {/* Left Section (Random Texts falling below the circle and disappearing) */}
      <div
        className="flex flex-col justify-center items-start w-full lg:w-1/4"
        ref={leftTextRef}
      >
        {leftTexts.map((text, index) => (
          <div
            key={index}
            className="text-xl mb-2 border-1 rounded-lg px-10 py-2 bg-blue-300"
          >
            {text}
          </div>
        ))}
      </div>
      {/* Middle Circle (Rotating Circle with Desktop and User SVG icon) */}
      <div
        ref={circleRef}
        className="w-[300px] h-[300px] rounded-full flex justify-center items-center mx-auto lg:mx-0" // Centered on desktop
        style={{
          position: "relative",
          zIndex: 1, // Ensure it's above text when animating
        }}
      >
        {/* Desktop with User SVG Icon */}
        <img src={desktop} alt="" />
      </div>
      {/* Right Section (Text Appears from Circle) */}
      <div
        className="flex flex-col justify-center items-start w-full lg:w-1/4"
        ref={rightTextRef}
      >
        {rightTexts.map((text, index) => (
          <div
            key={index}
            className="text-lg mb-2 border-1 rounded-lg px-10 py-2 bg-blue-300"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedComponent;
