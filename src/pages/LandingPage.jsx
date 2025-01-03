import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import backgroundImage from "../assets/background.png";
import AnimatedComponent from "../components/featuresIdea";
import Marquee from "../components/extra";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen grid grid-rows-[auto_1fr_auto] !overflow-x-hidden"
    >
      <Navbar />
      <div
        className="bg-cover  bg-no-repeat w-full h-fit"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Hero />
        <AnimatedComponent />
        <Marquee/>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
