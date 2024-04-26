import bgHeader from "../../assets/Navbar/images/dark-purple-abstract-blur-background-vector.jpg";
import defaultLogo from "../../assets/Navbar/images/user-profile-circle.svg";
import { useState } from "react";
import Tracks from "./components/Tracks";
import Albums from "./components/Albums";
import Posts from "./components/Posts";

const Profile = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const handleClick = (componentNumber: number) => {
    if (componentNumber === 1) {
      setIsVisible1(!isVisible1);
    } else if (componentNumber === 2) {
      setIsVisible2(!isVisible2);
    } else if (componentNumber === 3) {
      setIsVisible3(!isVisible3);
    }
  };
  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
      <div className="h-[272px] relative">
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
          Explore
        </h1>
      </div>
      <div className="flex items-center justify-center bottom-[13px] left-9 gap-[73px] mt-[16px] mb-[25px]">
        <h2
          className="text-[16px]  hover:text-primary cursor-pointer text-greyText font-semibold"
          onClick={() => {
            handleClick(1);
            setIsVisible2(false);
            setIsVisible3(false);
          }}
        >
          Posts
        </h2>
        <h2
          className="text-[16px] font-semibold hover:text-primary cursor-pointer text-greyText"
          onClick={() => {
            handleClick(2);
            setIsVisible1(false);
            setIsVisible3(false);
          }}
        >
          Tracks
        </h2>
        <h2
          className="text-[16px] font-semibold hover:text-primary cursor-pointer text-greyText"
          onClick={() => {
            handleClick(3);
            setIsVisible1(false);
            setIsVisible2(false);
          }}
        >
          Albums
        </h2>
      </div>
      <div className="flex flex-col relative ">
        {isVisible1 && <Posts />}
        {isVisible2 && <Tracks />}
        {isVisible3 && <Albums />}
      </div>
    </div>
  );
};
export default Profile;
