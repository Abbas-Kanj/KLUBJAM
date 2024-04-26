import bgHeader from "../../../assets/Navbar/images/dark-green-abstract-blur-background-vector.jpg";
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
        Workspace
      </h1>

      <div className="flex absolute bottom-[13px] left-9 gap-[41px]">
        <h2 className="text-[13px] font-bold hover:text-primary cursor-pointer">
          Personal Projects
        </h2>
        <h2 className="text-[13px] font-bold hover:text-primary cursor-pointer">
          Group Projects
        </h2>
      </div>
    </div>
  );
};

export default Header;
