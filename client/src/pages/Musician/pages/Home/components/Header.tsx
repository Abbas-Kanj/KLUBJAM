import { useAppSelector } from "../../../../../app/hooks";
import "../../../../../common/styles/index.css";

const Header = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div
      className="lg:max-h-[120px] flex relative rounded-xl
     bg-gradient-to-tl from-pink-950 via-background to-background"
    >
      <img
        src={user.info?.profile_picture}
        alt=""
        className="absolute top-3 right-3 cursor-pointer w-[32px] rounded-full"
      />
      <h1 className="relative mt-10 mb-11 ml-9 font-semibold text-3xl">Home</h1>
    </div>
  );
};

export default Header;
