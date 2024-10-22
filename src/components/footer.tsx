import GroupLogo from "./group-logo";

import Facebook from "../assets/facebook.svg";
import Gmail from "../assets/gmail.svg";
import Linkedln from "../assets/linkedln.svg";
import Twitter from "../assets/twitter.svg";

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/yourprofile",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://www.twitter.com/yourprofile",
  },
  {
    name: "Gmail",
    icon: Gmail,
    link: "https://www.gmail.com/yourprofile",
  },
  {
    name: "LinkedIn",
    icon: Linkedln,
    link: "https://www.linkedin.com/in/yourprofile",
  },
];

const Footer = () => {
  return (
    <footer className="bg-customBlue py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-col justify-between items-start lg:items-center space-y-10 lg:space-y-0">
          <div className="flex justify-center lg:justify-center md:pb-10  w-full">
            <GroupLogo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            <div className="flex flex-col">
              <p className="text-[16px] font-bold text-white capitalize">
                COMPANY
              </p>
              <ul className="flex flex-col text-customGray space-y-5 pt-5">
                <li className="text-customGray ">About</li>
                <li className="text-customGray ">Blog</li>
                <li className="text-customGray ">Contacts</li>
                <li className="text-customGray ">Job</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-bold text-white capitalize">
                CONTACT
              </p>
              <ul className="flex flex-col space-y-5 pt-5">
                <li className="text-customGray ">Phone</li>
                <li className="font-bold text-white">+234 708 507 3128</li>
                <li className="text-customGray ">Address</li>
                <li className="font-bold text-white">
                  16, Ogindipe Close, Upston Close
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-bold text-white">
                CONSUMER ADVISORY
              </p>
              <p className="text-white text-sm pt-5">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. Results may vary.
                <p className="pt-5">
                  By using our website, you agree to follow our
                  <span className="text-blue-400"> terms of service.</span>
                </p>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-bold text-white capitalize">
                GET IN TOUCH
              </p>
              <p className="text-customGray font-light pt-5">
                Feel free to get in touch with us via email
              </p>
              <p className="text-[24px] font-bold text-white">
                hello@sleepstiq.com
              </p>
              <div className="flex space-x-4 pt-5">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    className="flex items-center"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
              <p className="text-white md:text-[14px] pt-5">
                © 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
