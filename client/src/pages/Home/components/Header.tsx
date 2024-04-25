import bgHeader from "../../../assets/Navbar/images/images (1).jpg";
import defaultLogo from "../../../assets/Navbar/images/user-profile-circle.svg";

const Header = () => {
  return (
    <div className="h-[180px] relative">
      <img
        src={bgHeader}
        alt=""
        className="w-full h-full object-center absolute inset-0"
      />
      <img
        src={defaultLogo}
        alt=""
        className="absolute top-3 right-3 cursor-pointer"
      />
      <h1 className="relative mt-[67px] mb-[67px] ml-[35px] font-semibold text-[38px]">
        Home
      </h1>
    </div>
  );
};

export default Header;
