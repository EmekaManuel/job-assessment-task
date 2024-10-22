import backgroundImage from "../../assets/banner.svg";

const BackgroundImage = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "60vh",
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
