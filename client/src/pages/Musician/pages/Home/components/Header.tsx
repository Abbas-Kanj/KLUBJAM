import { useAppSelector } from "../../../../../app/hooks";
import bgHeader from "../../../../assets/Navbar/images/Rectangle 163 (1).png";

const Header = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="h-[180px] flex relative">
      <img
        src={bgHeader}
        alt=""
        className="w-full h-full object-center absolute inset-0"
      />
      <img
        src={user.info?.profile_picture}
        alt=""
        className="absolute top-3 right-3 cursor-pointer w-[32px] rounded-full"
      />
      <h1 className="relative mt-[67px] mb-[67px] ml-[35px] font-semibold text-[38px]">
        Home
      </h1>
    </div>
  );
};

export default Header;
