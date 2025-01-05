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

    const features = [
      {
        title: "Effortless Documentation For Smarter Healthcare",
        description:
          "Automate your documentation process with Neev - seamless, accurate, and ready for your EMRs.",
        items: [
          {
            icon: conversation,
            text: "Transcribe Conversations Record and summarise doctor-patient interactions with speaker diarisation.",
          },
          {
            icon: patient,
            text: "Empower Patients Share Patient Visit Summaries (PVS) for continuity in care.",
          },
          {
            icon: integration,
            text: "Integrate Seamlessly Send summaries directly to EMR.",
          },
        ],
        image: docu,
      },
      {
        title: "AI-Powered Transcription",
        description:
          "Accurately capture and convert doctor-patient conversations into structured documentation.",
        items: [
          {
            icon: model,
            text: "Real-Time Voice Recognition for quick documentation.",
          },
          {
            icon: rag,
            text: "Patient-friendly summaries for better understanding.",
          },
          {
            icon: privacy,
            text: "Secure and Private Ensures patient data confidentiality.",
          }, // Corrected duplicate text
        ],
        image: ai2,
      },
    ];

  return (
    <div className="mt-10 overflow-x-hidden lg:px-[2rem]">
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
              className="w-full lg:w-1/2" // Responsive widths
              // eslint-disable-next-line react/no-unknown-property
              uk-scrollspy={`cls: uk-animation-slide-${
                index % 2 === 0 ? "left" : "right"
              }; repeat: true; target: > div:nth-child(1); delay:300`}
            >
              <div>
                <h1 className="text-3xl lg:text-4xl text-blue-500 mb-2 leading-tight">
                  {section.title}
                </h1>
                <p className="text-lg lg:text-2xl leading-relaxed">
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
                  className="w-full"
                />{" "}
                {/* Responsive image */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollComponent;
