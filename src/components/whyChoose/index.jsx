// import mayank from "../../assets/mayank.jpg";
// import ricky from "../../assets/ricky.webp";
// import saurabh from "../../assets/saurabh.webp";
// import pravesh from "../../assets/pravesh.webp";
// import abhinav from "../../assets/abhinav.webp";

const teamMembers = [
  {
    name: "Continuity",
    role: "Since 1986 we have strived constantly to develop ourselves. We work to foster strong and sustainable relationships with our employees, clients, suppliers and all other stakeholders.",
    // image: abhinav,
    // socialLink: "https://x.com/cybcob",
  },
  {
    name: "Innovative Engineering with Our Exprienced Team",
    role: "We work as our clients' business partner. Our solution-oriented and experienced team offers innovative engineering solutions for challenging, large-scale projects.",
    // image: saurabh,
    // socialLink: "https://x.com/Sau_rbh",
  },
  {
    name: "Strategic Management of Human Resources",
    role: "Project-leader teams are selected among our experienced international staff members to ensure that each engagement benefits from the variety of skills available at Anel. Our expert and competent management team supports our on-site success.",
    // image: mayank,
    // socialLink: "https://www.linkedin.com/in/mayankagrawal2",
  },
  {
    name: "Standard of High Quality",
    role: "We pride ourselves on abiding by industry regulations and proper documentation procedures to ensure the highest standards of quality with each project. We track project progress by key project performance indicators.",
    // image: pravesh,
    // socialLink: "https://x.com/prabeshgoyal",
  },
  {
    name: "Safety",
    role: "The well-being and safety of our employees is a top priority for us. We meticulously execute health & safety trainings. risk assessment studies and emergency action plans.",
    // image: ricky,
    // socialLink: "https://x.from/rickybahrey", // Corrected social link
  },
  {
    name: "Effective Cost and Management Planning",
    role: "We effectively plan each stage of our projects in terms of cost and management with our Resource Management Planning System and strong planning structure.",
    // image: ricky,
    // socialLink: "https://x.from/rickybahrey", // Corrected social link
  },
];

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="flex justify-center items-center flex-wrap max-w-[85%] mx-auto gap-8 px-10 py-12 overflow-y-hidden">
      <div className=".uk-head md:text-3xl font-bold mb-0 md:mb-4 text-blue-500 text-4xl flex justify-self-center border-b-2 border-blue-500">
        Why Choose Us
      </div>
      <div
        className="team-member flex justify-around items-center lg:flex-row flex-wrap gap-8"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"
        // uk-scrollspy-class="uk-animation-slide-top"
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            // href={member.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-card team-member border flex gap-3 flex-row justify-around items-center border-gray-400 rounded-lg p-4 w-[320px] hover:border-blue-800  hover:shadow-2xl transition-all"
          >
            <div className="flex flex-row gap-3 items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl text-blue-500 mb-2">{member.name}</h3>
                <p className=" text-lg  mb-1">
                  {member.role}
                </p>
              </div>
            </div>
            <svg
              className="w-6 h-6 text-gray-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 17L16.95 7.05M7 7h10v10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
