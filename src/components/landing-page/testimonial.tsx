import UserImage from "../../assets/user.svg";
import StarIcon from "../../assets/star.svg";

const TestimonialNote = () => {
  return (
    <>
      <div className=" flex flex-col gap-5 md:gap-10">
        <div>
          <p className="text-customBlue pb-3 text-[14px]">Our Amazing Story</p>
          <h2 className="text-customBlue font-bold text-[28px] md:text-[36px]">
            10k+ Happy Customers
          </h2>
        </div>
        <p className="text-customBlue font-normal text-[16px]">
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>
        <p className="text-customBlue underline font-bold text-[16px]">
          Know More About Us
        </p>
      </div>
    </>
  );
};

const TestimonialCard = () => {
  return (
    <>
      <div className="flex gap-10">
        <div className="px-5 md:px-10 py-[25px] md:py-[50px] justify-between flex flex-col">
          <p className="text-customBlue font-extralight italic text-[24px]">
            I’m a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.
          </p>
          <p className="text-customBlue  font-bold text-[16px] flex items-center gap-2 mt-20">
            {" "}
            <img
              src={UserImage}
              alt="James Miller"
              className="w-[84px] h-[84px] rounded-full"
            />
            <div className="flex flex-col">
              <span>James Miller</span>
              <span className="font-normal">CEO, Techbias</span>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

const testimonyData = [
  {
    comment:
      "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.!",
    userName: "James Miller",
    rating: 5,
  },
  {
    comment:
      "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
    userName: "Sophia Johnson",
    rating: 4,
  },
  {
    comment: "It’s a really good product and helps me sleep better at night!.",
    userName: "Michael Lee",
    rating: 3,
  },
  {
    comment:
      "Helps me relax and remember to breathe. Stress level definitely goes down",
    userName: "Michael Lee",
    rating: 4,
  },
];

const TestimonialReviewCard = ({ comment, userName, rating }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < rating ? (
          <img src={StarIcon} alt="Star" className="w-5 h-5" />
        ) : (
          "☆"
        )}
      </span>
    ));
  };

  return (
    <div className="bg-customCreme p-6 rounded-lg shadow-md w-[400px] min-h-[250px] flex flex-col justify-between">
      <p className="text-gray-800 italic text-[18px] mb-4">"{comment}"</p>
      <div className="flex flex-col justify-between items-start mt-auto">
        <p className="font-bold text-customBlue">{userName}</p>
        <div className="flex">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="relative  space-y-[60px] pb-1">
      {/* Main Testimonial Section */}
      <div className="container mt-8 md:mt-0 mx-auto px-4">
        <section className="flex flex-col lg:flex-row md:items-center md:justify-around gap-6 py-8 lg:py-4 lg:pb-4 lg:pt-[150px] ">
          <div className="w-full md:h-[366px] md:w-[475px] ">
            <TestimonialNote />
          </div>
          <div className="w-full md:h-[455px] md:w-[474px] bg-customCreme rounded-lg p-6">
            <TestimonialCard />
          </div>
        </section>
      </div>

      {/* Customer Reviews Section (Horizontal Scroll on Small Screens) */}
      <div className="bg-white h-auto w-full px-4 py-6 space-x-6 overflow-x-auto flex snap-x">
        {testimonyData.map((testimony, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90%] md:w-[45%] lg:w-[400px] xl:w-[400px] snap-center"
          >
            <TestimonialReviewCard
              comment={testimony.comment}
              userName={testimony.userName}
              rating={testimony.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
