import mayank from "../../assets/mayank.jpg";
import ricky from "../../assets/ricky.webp";
import saurabh from "../../assets/saurabh.webp";
import pravesh from "../../assets/pravesh.webp";
import abhinav from "../../assets/abhinav.webp";

const teamMembers = [
  {
    name: "Abhinav Singh",
    role: "AI/ML Engineer, IIT Madras Alumnus",
    image: abhinav,
    socialLink: "https://x.com/cybcob",
  },
  {
    name: "Dr. Saurabh Bajpai",
    role: "Doctor, Leading Research",
    image: saurabh,
    socialLink: "https://x.com/Sau_rbh",
  },
  {
    name: "Mayank Agarwal",
    role: "CA, SRCC Alumnus",
    image: mayank,
    socialLink: "https://www.linkedin.com/in/mayankagrawal2",
  },
  {
    name: "Prabesh Goyal",
    role: "Data Engineer",
    image: pravesh,
    socialLink: "https://x.com/prabeshgoyal",
  },
  {
    name: "Ricky Bahrey",
    role: "Product Designer",
    image: ricky,
    socialLink: "https://x.from/rickybahrey", // Corrected social link
  },
];

const Team = () => {


  return (
    <div
      className="flex justify-center items-center flex-wrap max-w-[85%] mx-auto gap-8 px-10 py-12 overflow-y-hidden"
    >
      <div
        className="text-xl .uk-head md:text-3xl font-bold mb-0 md:mb-4"
      >
        Meet Our Team
      </div>
      <div
        className="team-member flex justify-around items-center lg:flex-row flex-wrap gap-8"
        // eslint-disable-next-line react/no-unknown-property
        uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"
        // uk-scrollspy-class="uk-animation-slide-top"
      >
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href={member.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-card team-member border flex gap-3 flex-row justify-around items-center border-gray-400 rounded-lg p-4 w-[320px] hover:border-blue-800 hover:shadow-lg transition-all"
          >
            <div className="flex flex-row gap-3 items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="font-semibold text-sm text-gray-700 mb-1">
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
