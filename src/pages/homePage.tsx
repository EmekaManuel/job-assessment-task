import Footer from "@/components/footer";
import BackgroundImage from "@/components/landing-page/background-img";
import Hero from "@/components/landing-page/hero";
import MissionStatement from "@/components/landing-page/mission-statement";
import Partners from "@/components/landing-page/partners";
import Reviews from "@/components/landing-page/reviews";
import ShopNowCta from "@/components/landing-page/shopNow-cta";
import Testimonial from "@/components/landing-page/testimonial";
import NavBar from "@/components/navbar";

const HomePage = () => {
  return (
    <>
      <div className="flex min-h-screen space-y-10 flex-col">
        <div>
          <BackgroundImage>
            <NavBar />
            <Hero />
          </BackgroundImage>

          <div className="partner-cards-container  absolute top- left-0 right-0 bottom-0 flex justify-center items-center">
            <Partners />
          </div>
        </div>

        <Testimonial />
        <ShopNowCta />
        <MissionStatement />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
