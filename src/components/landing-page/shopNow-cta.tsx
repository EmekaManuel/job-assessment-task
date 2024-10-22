import { NavLink } from "react-router-dom";
import VapePenImg from "../../assets/vape-pen.svg";
import { Button } from "../ui/button";

const CTAMessage = () => {
  return (
    <>
      <div className="flex space-y-7 flex-col">
        <div className="flex flex-col">
          <h2 className="text-customBlue font-bold text-[28px] md:text-[36px]">
            Shop Now{" "}
          </h2>
        </div>
        <p className="text-customBlue font-normal text-[14px] md:text-[16px]">
          Our Personal Diffuser is an aromatherapy device{" "}
          <br className="hidden md:inline" />
          that contains a blend of melatonin, lavender, and{" "}
          <br className="hidden md:inline" />
          chamomile. A few breaths of our plant-based{" "}
          <br className="hidden md:inline" />
          essential oil mist will mellow you out, quiet the mind,{" "}
          <br className="hidden md:inline" />
          and lull you to bed.
        </p>
        <div className="flex w-full space-x-4 py-4 md:pb-6">
          <Button
            className="w-full md:w-[225px] h-[50px]"
            variant="destructive"
            asChild
          >
            <NavLink to="/shop">Visit Shop</NavLink>
          </Button>
        </div>
      </div>
    </>
  );
};

const ShopNowCta = () => {
  return (
    <div className="pt-[40px] md:pt-[80px] relative space-y-[40px] md:space-y-[90px] pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="w-full md:w-1/2">
            <img
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto"
              src={VapePenImg}
              alt="Vape Pen"
            />
          </div>
          <div className="w-full md:w-1/2">
            <CTAMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNowCta;
