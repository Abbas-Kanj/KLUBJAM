import bgHeader from "../../assets/Navbar/images/black-blur-background-b21117e1rgm111p3.jpg";
import defaultLogo from "../../assets/Navbar/images/Ellipse 38.svg";
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
        <div className="relative flex ml-[77px]">
          <img
            src={defaultLogo}
            alt=""
            className="w-[140px] h-[140px] mt-[80px] "
          />
          <div className=" flex flex-col ml-[23px] mt-[110px]">
            <h1 className="font-semibold text-[44px]">John-Dx</h1>
            <div className="flex mt-[4px] mb-[6px] gap-[28px]">
              <h2 className="text-[14px] font-medium">John Doe</h2>
              <h2 className="text-[14px] font-medium">Albania</h2>
            </div>
            <p className="font-light text-[13px]">
              Making heartfelt music, connecting with audiences <br />
              through inspiring melodies.
            </p>
          </div>
        </div>
        <div className="flex relative justify-end mr-[35px] mb-[7px] gap-[26px]">
          <h2 className="text-[14px]">6 posts</h2>
          <h2 className="text-[14px]">11 tracks</h2>
          <h2 className="text-[14px]">3 albums</h2>
          <h2 className="text-[14px]">144 followers</h2>
          <h2 className="text-[14px]">32 following</h2>
        </div>
      </div>
      <div className="flex items-center justify-center bottom-[13px] left-9 gap-[73px] mt-[16px] mb-[25px]">
        <h2
          className="text-[16px]  hover:text-primary cursor-pointer  font-semibold"
          onClick={() => {
            handleClick(1);
            setIsVisible2(false);
            setIsVisible3(false);
          }}
        >
          Posts
        </h2>
        <h2
          className="text-[16px] font-semibold hover:text-primary cursor-pointer "
          onClick={() => {
            handleClick(2);
            setIsVisible1(false);
            setIsVisible3(false);
          }}
        >
          Tracks
        </h2>
        <h2
          className="text-[16px] font-semibold hover:text-primary cursor-pointer "
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
