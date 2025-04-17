// import video from "../../assets/neev.mp4";
import hero from "../../assets/HERO-IMAGE.jpg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroTextRef = useRef(null); // Ref for the text container
  const heroVideoRef = useRef(null); // Ref for the video container
  const precisionTextRef = useRef(null); // Ref for the typing effect

  const precisionWords = [
    "Excellence",
    "Accuracy",
    "Perfection",
    "Clarity",
    "Focus",
  ]; // Words list

  const [precisionText, setPrecisionText] = useState(""); // Stores typed text
  const [wordIndex, setWordIndex] = useState(0); // Current word index
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [isDeleting, setIsDeleting] = useState(false); // Tracks delete phase

  // Typing Effect Logic
  useEffect(() => {
    const currentWord = precisionWords[wordIndex];
    let typingSpeed = isDeleting ? 150 : 250; // Typing and deleting speed

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1000; // Wait before deleting
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 500; // Wait before typing next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % precisionWords.length); // Move to next word
    }

    const typingTimeout = setTimeout(() => {
      setPrecisionText(
        currentWord.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="hero pt-20 pb-10 mt-20 !overflow-x-hidden" id="home">
      <div className="container mx-auto px-4">
        {" "}
        {/* Added container */}
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          {" "}
          {/* Flex changes on larger screens */}
          {/* Left Section: Text Content */}
          <div
            ref={heroTextRef}
            className="heroTextContainer p-4 lg:p-10 lg:w-1/2 w-full" // Responsive widths and padding
            // eslint-disable-next-line react/no-unknown-property
            uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:300"
          >
            <h1 className="text-3xl max-lg:text-xl lg:text-4xl font-bold mb-4 leading-tight">
              {" "}
              {/* Responsive font sizes */}
              <div>Welcome to</div>
              <div className="text-5xl text-blue-500">MSD Engineering</div>
              <span>Connecting Services and Providers Through </span>
              <span ref={precisionTextRef} className="font-bold text-blue-500 ">
                {precisionText}|
              </span>
            </h1>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mt-4">
              {" "}
              {/* Responsive font sizes */}
              Making services simple, smart, and more human-centric by
              reducing admin work, saving time, and enabling customers to focus on
              what truly matters - Quality works.
            </p>
          </div>
          {/* Right Section: Video */}
          <div
            ref={heroVideoRef}
            className="hero-video rounded-3xl lg:w-1/2 w-full" // Responsive widths; removed pr-[2.5rem]
            // eslint-disable-next-line react/no-unknown-property
            uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:300"
          >
            {/* <video
              className="w-full h-auto object-cover rounded-[12px] border-solid border-[hsla(212, 100%, 47%, 1)] border-[5px]"
              autoPlay
              loop
              muted
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <div className="w-full h-auto object-cover rounded-[12px] ">
              <img src={hero} alt="image" className="rounded-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
