import { useRef } from "react";
import docu from "../../assets/docu.webp";
import conversation from "../../assets/conversation.webp";
import patient from "../../assets/patient.webp";
import integration from "../../assets/integration.webp";
import ai2 from "../../assets/ai2.webp";
import rag from "../../assets/rag.webp";
import model from "../../assets/model.webp";
import privacy from "../../assets/privacy.webp";

const ScrollComponent = () => {
  const containerRef = useRef(null);

  return (
    <div
      className="flex lg:flex-col max-w-[100%] items-center overflow-x-hidden mx-auto mt-10"
      ref={containerRef}
    >
      {/* First Section */}
      <div
        className="flex justify-around items-center  gap-5 mr-4  mt-5  overflow-x-hidden mx-auto"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-left; repeat: true; target: > div:nth-child(1); delay:300"
      >
        {/* Left (Text + Features) */}
        <div className="w-[40%]">
          <h1 className="text-4xl text-blue-500 mb-2">
            Effortless Documentation For Smarter Healthcare
          </h1>
          <p className="text-2xl">
            Automate your documentation process with Neev - seamless, accurate,
            and ready for your EMRs.
          </p>
          <div className="flex justify-start items-center gap-5 p-5">
            <div>
              <img src={conversation} alt="" className="h-[2rem] w-[2rem]" />
            </div>
            <p>
              Transcribe Conversations Record and summarise doctor-patient
              interactions with speaker diarisation.
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 p-5">
            <div>
              <img src={patient} alt="" className="h-[2rem] w-[2rem]" />
            </div>
            <p>
              Empower Patients Share Patient Visit Summaries (PVS) for
              continuity in care.
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 p-5">
            <div>
              <img src={integration} alt="" className="h-[2rem] w-[2rem]" />
            </div>
            <p>Integrate Seamlessly Send summaries directly to EMR.</p>
          </div>
        </div>

        {/* Right (Image) */}
        <div
          className="w-[40%] uk-scrollspy-inview uk-animation-slide-right"
          // eslint-disable-next-line react/no-unknown-property
          uk-scrollspy="cls: uk-animation-slide-right; repeat: true; target: > div:nth-child(1); delay:300"
        >
          <div>
            <img src={docu} alt="Section Image" className="max-w-[100%]" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex justify-around items-center  gap-5 mr-4  mt-10">
        {/* Right (Image) */}
        <div
          className="w-[40%] "
          // eslint-disable-next-line react/no-unknown-property
          uk-scrollspy="cls: uk-animation-slide-left; repeat: true; target: > div:nth-child(1); delay:300"
        >
          <div>
            <img src={ai2} alt="Section Image" className="max-w-[100%]" />
          </div>
        </div>
        {/* Left (Text + Features) */}
        <div
          className="w-[40%]"
          // eslint-disable-next-line react/no-unknown-property
          uk-scrollspy="cls: uk-animation-slide-right; repeat: true; target: > div:nth-child(1); delay:300"
        >
          <div>
            <h1 className="text-4xl text-blue-500 mb-2">
              AI-Powered Transcription
            </h1>
            <p className="text-2xl">
              Accurately capture and convert doctor-patient conversations into
              structured documentation.
            </p>
            <div className="flex justify-start items-center gap-5 p-5">
              <div>
                <img src={model} alt="" className="h-[2rem] w-[2rem]" />
              </div>
              <p>Real-Time Voice Recognition for quick documentation.</p>
            </div>
            <div className="flex justify-start items-center gap-5 p-5">
              <div>
                <img src={rag} alt="" className="h-[2rem] w-[2rem]" />
              </div>
              <p>Patient-friendly summaries for better understanding.</p>
            </div>
            <div className="flex justify-start items-center gap-5 p-5">
              <div>
                <img src={privacy} alt="" className="h-[2rem] w-[2rem]" />
              </div>
              <p>Patient-friendly summaries for better understanding.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
