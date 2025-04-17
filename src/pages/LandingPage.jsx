import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import backgroundImage from "../assets/background.png";
import AnimatedComponent from "../components/featuresIdea";
import ScrollComponent from "../components/moreItems";
import Team from "../components/team";
import JoinWaitlist from "../components/subscribe";
import OurServices from "../components/ourServices";
import WhyChooseUs from "../components/whyChoose";
import OurClients from "../components/extra";

const LandingPage = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]  max-w-full mx-auto">
      <Navbar />
      <div
        className="bg-cover  bg-no-repeat max-w-full mx-auto h-fit !overflow-x-hidden "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Hero />
        <AnimatedComponent />
        <OurClients />
        <OurServices />
        <WhyChooseUs/>
        {/* <ScrollComponent /> */}
        {/* <Team /> */}
        <JoinWaitlist/>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
