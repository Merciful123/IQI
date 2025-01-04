import video from "../../assets/neev.mp4";
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
    <section className="hero flex gap-5 items-center pt-20 pb-10 mt-32 !overflow-x-hidden">
      {/* Left Section: Text Content */}
      <div
        ref={heroTextRef}
        className="heroTextContainer w-1/2 p-10"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true; target: > div:nth-child(1); delay:300"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">
            <span>Connecting Patients and Providers Through </span>
            <span ref={precisionTextRef} className="font-bold text-blue-500">
              {precisionText}|
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Making healthcare simple, smart, and more human-centric by reducing
            admin work, saving time, and enabling doctors to focus on what truly
            matters - Patients.
          </p>
        </div>
      </div>

      {/* Right Section: Video */}
      <div
        ref={heroVideoRef}
        className="hero-video w-1/2 rounded-3xl pr-[2.5rem]"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-right; repeat: true; target: > div:nth-child(1); delay:300"
      >
        <div>
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
      </div>
    </section>
  );
};

export default Hero;
