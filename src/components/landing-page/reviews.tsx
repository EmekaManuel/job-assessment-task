import StarIcon from "../../assets/star.svg";
import product from "../../assets/product.svg";

const productReviewData = [
  {
    comment:
      "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    userName: "James Miller",
    rating: 5,
    productImage: product,
  },
  {
    comment:
      "It really helps me fall right to sleep compared to melatonin pills.",
    userName: "Sophia Johnson",
    rating: 4,
    productImage: product,
  },
  {
    comment:
      "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now..",
    userName: "Michael Lee",
    rating: 3,
    productImage: product,
  },
  {
    comment: "I have been falling asleep faster and sleeping thru the night.",
    userName: "Michael Lee",
    rating: 4,
    productImage: product,
  },
];

const ProductReviewCard = ({ comment, userName, rating }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index}>
        {index < rating ? (
          <img src={StarIcon} alt="Star" className="w-5 h-5" />
        ) : (
          <span className="w-5 h-5"> ☆</span>
        )}
      </span>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[306px] h-[420px] flex flex-col">
      <img
        src={product}
        className="max-h-[210px] w-full object-contain bg-white flex items-center justify-center mb-4"
        alt="Product"
      />
      <p className="text-gray-800 italic font-light text-[16px] mb-4 flex-grow">
        "{comment}"
      </p>
      <div className="flex flex-col justify-between items-start mt-auto">
        <p className="font-bold text-customBlue">{userName}</p>
        <div className="flex">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <>
      <div className="flex flex-col items-center container pt-[50px] space-y-10">
        <h2 className="text-customBlue font-bold text-[28px] md:text-[36px]">
          Product Reviews
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {productReviewData.map((testimony, index) => (
            <ProductReviewCard
              key={index}
              comment={testimony.comment}
              userName={testimony.userName}
              rating={testimony.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
