// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import desktop from "../../assets/desktop.svg";

// const AnimatedComponent = () => {
//   // Use useRef for managing DOM elements references
//   const leftTextRef = useRef(null);
//   const circleRef = useRef(null);
//   const rightTextRef = useRef(null);

//   const leftTexts = ["overload", "redundancy", "burden", "complex", "inefficient"];
//   const rightTexts = ["reducing overload", "saving time", "precision", "smart work", "perfection"];

//   useEffect(() => {
//     // GSAP Stagger Animation for Left Texts (Falling below the circle and then moving to the circle)
//     if (leftTextRef.current) {
//       gsap.fromTo(
//         leftTextRef.current.children,
//         { x: -200, opacity: 1, scale: 1 },
//         {
//           x: circleRef.current ? circleRef.current.offsetTop +  0 : 0, // Fall below the circle
//           opacity: 0,
//           scale: 0.2, // Shrink the text as it reaches the circle
//           stagger: 0.5,
//           delay: 5,
//           duration: 5,
//           repeat: -1, // Repeat infinitely
//           yoyo: false, // Do not reverse the animation
//           onComplete: () => {
//             // Add a 1-second pause before restarting the animation
//             setTimeout(() => {
//               gsap.fromTo(
//                 leftTextRef.current.children,
//                 { x: -200, opacity: 1, scale: 1 },
//                 {
//                   x: circleRef.current ? circleRef.current.offsetTop +0 : 0, // Fall below the circle
//                   opacity: 0,
//                   scale: 0.5, // Shrink the text as it reaches the circle
//                   stagger: 1,
//                   delay:5,
//                   duration: 1,
//                   repeat: -1,
//                   yoyo: false,
//                 }
//               );
//             }, 1000); // Wait 1 second before restarting the animation
//           },
//         }
//       );
//     }

//     // GSAP Rotation Animation for the Circle (infinite rotation)
//     if (circleRef.current) {
//       gsap.to(circleRef.current, {
//         y: "20px", // Move to the right by 100px
//         repeat: -1, // Infinite movement
//         duration: 3, // Duration of one complete movement (left to right and back)
//         ease: "power1.inOut", // Smooth easing effect
//         yoyo: true, // Make the movement reverse, so it goes left-right
//       });
//     }

//     // GSAP Animation for Right Texts (appears from circle repeatedly)
//     if (rightTextRef.current) {
//       gsap.fromTo(
//         rightTextRef.current.children,
//         { opacity: 0, x: 500 },
//         {
//           opacity: 1,
//           x: 0,
//           stagger: 0.5,
//           duration: 2,
//           delay: 10,
//           repeat: -1, // Infinite repetition
//           yoyo: true, // Reverses the animation
//         }
//       );
//     }
//   }, []);

//   return (
//     <div className="flex flex-col lg:flex-row justify-around items-center w-full min-h-[90vh] px-4 overflow-x-hidden">
//       {" "}
//       {/* Added flex-col for mobile */}
//       {/* Left Section (Random Texts falling below the circle and disappearing) */}
//       <div
//         className="flex flex-col justify-center items-start w-full lg:w-1/4"
//         ref={leftTextRef}
//       >
//         {leftTexts.map((text, index) => (
//           <div
//             key={index}
//             className="text-xl mb-2 border-1 rounded-lg px-10 py-2 bg-blue-300"
//           >
//             {text}
//           </div>
//         ))}
//       </div>
//       {/* Middle Circle (Rotating Circle with Desktop and User SVG icon) */}
//       <div
//         ref={circleRef}
//         className="w-[300px] h-[300px] rounded-full flex justify-center items-center mx-auto lg:mx-0" // Centered on desktop
//         style={{
//           position: "relative",
//           zIndex: 1, // Ensure it's above text when animating
//         }}
//       >
//         {/* Desktop with User SVG Icon */}
//         <img src={desktop} alt="" />
//       </div>
//       {/* Right Section (Text Appears from Circle) */}
//       <div
//         className="flex flex-col justify-center items-start w-full lg:w-1/4"
//         ref={rightTextRef}
//       >
//         {rightTexts.map((text, index) => (
//           <div
//             key={index}
//             className="text-lg mb-2 border-1 rounded-lg px-10 py-2 bg-blue-300"
//           >
//             {text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AnimatedComponent;



import { useRef } from "react";
// import docu from "../../assets/docu.webp";
import docu from "../../assets/about-img.jpg"
// import conversation from "../../assets/conversation.webp";
// import patient from "../../assets/patient.webp";
// import integration from "../../assets/integration.webp";
// import ai2 from "../../assets/ai2.webp";
// import rag from "../../assets/rag.webp";
// import model from "../../assets/model.webp";
// import privacy from "../../assets/privacy.webp";

const AnimatedComponent = () => {
  const containerRef = useRef(null);

  const features = [
    {
      title: "About Us",
      description:
        "MSD Engineering Pvt Ltd is an MEP Engineering firm based in Delhi, India. MSD Engineering pvt ltd provides services in the field of HVAC, Electrical, Plumbing Design, and Building Management service. Also, We provide high-quality, cost-effective, and time-bound mechanical, electrical, firefighter, and plumbing (MEP) engineering services using the latest development and Intern.",
      items: [
        // {
        //   icon: conversation,
        //   text: "MSD Engineering Pvt Ltd is an MEP Engineering firm based in Delhi, India. MSD Engineering pvt ltd provides services in the field of HVAC, Electrical, Plumbing Design, and Building Management service. Also, We provide high-quality, cost-effective, and time-bound mechanical, electrical, firefighter, and plumbing (MEP) engineering services using the latest development and Intern.",
        // },
        // {
        //   icon: patient,
        //   text: "Empower Patients Share Patient Visit Summaries (PVS) for continuity in care.",
        // },
        // {
        //   icon: integration,
        //   text: "Integrate Seamlessly Send summaries directly to EMR.",
        // },
      ],
      image: docu,
    },
    // {
    //   title: "AI-Powered Transcription",
    //   description:
    //     "Accurately capture and convert doctor-patient conversations into structured documentation.",
    //   items: [
    //     {
    //       icon: model,
    //       text: "Real-Time Voice Recognition for quick documentation.",
    //     },
    //     {
    //       icon: rag,
    //       text: "Patient-friendly summaries for better understanding.",
    //     },
    //     {
    //       icon: privacy,
    //       text: "Secure and Private Ensures patient data confidentiality.",
    //     }, // Corrected duplicate text
    //   ],
    //   image: ai2,
    // },
  ];

  return (
    <div className="mt-10 overflow-x-hidden lg:px-[2rem]" id="about">
      {" "}
      {/* Removed mx-auto from here for better mobile handling */}
      <div className="container mx-auto px-4">
        {" "}
        {/* Added container for responsiveness */}
        {features.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-5 py-8 ${
              // Added py-8 for vertical spacing
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse" // Alternate image placement
            }`}
            ref={containerRef}
          >
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
                  className="w-full rounded-[12px]"
                />{" "}
                {/* Responsive image */}
              </div>
            </div>
            <div
              className="w-full lg:w-1/2" // Responsive widths
              // eslint-disable-next-line react/no-unknown-property
              uk-scrollspy={`cls: uk-animation-slide-${
                index % 2 === 0 ? "left" : "right"
              }; repeat: true; target: > div:nth-child(1); delay:300`}
            >
              <div>
                <h1 className="text-3xl lg:text-4xl text-blue-500 mb-4 leading-tight">
                  {section.title}
                </h1>
                <p className="text-lg lg:text-xl leading-relaxed">
                  {section.description}
                </p>
                <div className="mt-4">
                  {section.items.map((item, itemIndex) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedComponent;
