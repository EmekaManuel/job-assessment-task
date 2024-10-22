import { ArrowRightIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <main className="min-h-[calc(100vh-57px-97px)] flex-1">
      <div className="container relative pb-1">
        <section className="flex max-w-[980px] flex-col gap-2 py-8 md:py-4 md:pb-4 lg:pt-[150px] lg:pb-2">
          <h3 className="text-[18px] md:text-[16px]">We're Here to Help You</h3>
          <h1 className="text-[60px] text-customBlue font-bold lg:mb-5 leading-tight tracking-wide	 md:text-5xl lg:leading-[1.1]">
            Relax & Rest
          </h1>
          <span className="max-w-[750px] text-customBlue text-[16px] font-light md:text-[14px]">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can <br /> get quality sleep.
          </span>
          <div className="flex w-full space-x-4 py-4 md:pb-6">
            <Button
              className="w-full sm:w-[225px] h-[50px]" // Full width on small screens
              variant="destructive"
              asChild
            >
              <NavLink to="/shop">Visit Shop</NavLink>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
