import Google from "../../assets/google.svg";
import SleepRev from "../../assets/sleep-review.svg";
import Bloomberg from "../../assets/bloomberg.svg";
import Forbes from "../../assets/forbes.svg";
import Influencive from "../../assets/influencive.svg";

const partnerData = [
  {
    logo: Google,
    name: "Partner 1",
    link: "https://www.partner1.com",
  },
  {
    logo: SleepRev,
    name: "Partner 2",
    link: "https://www.partner2.com",
  },
  {
    logo: Bloomberg,
    name: "Partner 3",
    link: "https://www.partner3.com",
  },
  {
    logo: Forbes,
    name: "Partner 4",
    link: "https://www.partner4.com",
  },
  {
    logo: Influencive,
    name: "Partner 4",
    link: "https://www.partner4.com",
  },
];

const PartnerCard = ({ logo, name, link }) => {
  return (
    <div className="partner-card">
      <img src={logo} alt={name} />
    </div>
  );
};

const Partners = () => {
  return (
    <div className="partner-container bg-white h-[131px] relative w-[1276px] pr-6 space-x-10 flex justify-around items-center  ml-auto">
      {partnerData.map((partner, index) => (
        <PartnerCard
          key={index}
          logo={partner.logo}
          name={partner.name}
          link={partner.link}
        />
      ))}
    </div>
  );
};
export default Partners;
