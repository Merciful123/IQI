import video from "../../assets/neev.mp4"
import gsap from "gsap"; 
import { useEffect, useRef, useState } from "react";



const Hero = () => {
 const heroTextRef = useRef(null); // Ref for the text container
 const heroVideoRef = useRef(null); // Ref for the video container
 const precisionTextRef = useRef(null); // Ref for the "Precision" text
 const [precisionText, setPrecisionText] = useState("Precision"); // State to manage dynamic precision text

 const precisionWords = [
   "Excellence",
   "Accuracy",
   "Perfection",
   "Clarity",
   "Focus",
 ]; // List of words to replace "Precision"

 useEffect(() => {
   const ctx = gsap.context(() => {
     // Slide text from left to right
     gsap.fromTo(
       heroTextRef.current,
       { x: "-100%", opacity: 0 }, // Starting position and opacity
       { x: 0, opacity: 1, duration: 2.5, ease: "power2.out" } // End position
     );

     // Slide video from right to left
     gsap.fromTo(
       heroVideoRef.current,
       { x: "100%", opacity: 0 }, // Starting position and opacity
       { x: 0, opacity: 1, duration: 2.5, ease: "power2.out" } // End position
     );

     // Dynamic Text Animation for the Precision section
     let currentWordIndex = 0;
     const changeText = () => {
       // Animate rolling up effect
       gsap.to(precisionTextRef.current, {
         y: "-100%", // Move it up (roll up effect)
         opacity: 0,
         duration: 1.5,
         ease: "power2.out",
         onComplete: () => {
           // After animation ends, change the text and bring it back into view
           currentWordIndex++;
           if (currentWordIndex >= precisionWords.length) {
             currentWordIndex = 0; // Reset index to loop back to the first word
           }
           setPrecisionText(precisionWords[currentWordIndex]); // Change text dynamically
           gsap.fromTo(
             precisionTextRef.current,
             { y: "100%", opacity: 0 }, // Start from below the screen
             { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" } // Slide in effect
           );
         },
       });
     };
     // Start rolling up animation after the initial delay and repeat every 4 seconds
     const intervalId = setInterval(changeText, 4000); // Adjust timing for smooth transitions

     // Cleanup the interval on component unmount
     return () => clearInterval(intervalId);
   });

   return () => ctx.revert(); // Cleanup GSAP context
 }, []);

  return (
    <section className="hero  md:flex gap-5 items-center pt-10 pb-10">
      {/* Left Section: Text Content */}
      <div ref={heroTextRef} className="heroTextContainer w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-4">
          <span>Connecting Patients and Providers Through </span>
          <span ref={precisionTextRef} className="font-bold  text-blue-500">
            {precisionText}
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Making healthcare simple, smart, and more human-centric by reducing
          admin work, saving time, and enabling doctors to focus on what truly
          matters - Patients.
        </p>
      </div>

      {/* Right Section: Video */}
      <div
        ref={heroVideoRef}
        className=" hero-video w-1/2 rounded-3xl  pr-[2.5rem]"
      >
        <video
          className="w-full h-auto object-cover rounded-[12px] border-solid border-[hsla(212, 100%, 47%, 1)] border-[5px]"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
