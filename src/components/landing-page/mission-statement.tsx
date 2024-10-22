import { NavLink } from "react-router-dom";
import MissionImg from "../../assets/mission.svg";
import { Button } from "../ui/button";

const MissionStatementText = () => {
  return (
    <>
      <div className="flex space-y-7 flex-col">
        <div className="flex space-y-8 flex-col">
          <h2 className="text-customBlue font-bold text-[28px] md:text-[36px]">
            Our Mission
          </h2>
          <p className="text-customBlue font-normal text-[14px] md:text-[16px]">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to:
          </p>

          <ul className="list-none space-y-2 text-customBlue font-normal text-[14px] md:text-[16px]">
            <li>✓ Promote Calm</li>
            <li>✓ Support Sleep</li>
            <li>✓ Reduce Stress</li>
            <li>✓ Aid Relaxation</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const MissionStatement = () => {
  return (
    <>
      <div className="flex justify-center md:justify-end px-4 md:px-0 py-8">
        <div className="relative space-y-[40px] md:space-y-[90px] pb-1">
          <div className="flex md:w-[1276px] flex-col md:flex-row gap-10 items-center md:items-start justify-between">
            <MissionStatementText />
            <img
              className="w-full max-w-[400px] md:max-w-[800px] h-auto"
              src={MissionImg}
              alt="Mission Image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8 justify-center py-8">
        <h2 className="text-customBlue font-bold text-[28px] md:text-[36px]">
          Visit Our Shop
        </h2>
        <p className="max-w-[915px] text-customBlue text-center text-[14px] md:text-[16px]">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <Button
          className="w-full max-w-[225px] h-[50px]"
          variant="destructive"
          asChild
        >
          <NavLink to="/shop">Visit Shop</NavLink>
        </Button>
      </div>
    </>
  );
};

export default MissionStatement;
