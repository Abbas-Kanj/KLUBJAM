import bgHeader from "../../../assets/Navbar/images/Rectangle 165.png";
import { useState } from "react";
import All from "./components/All";
import Tracks from "./components/Tracks";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import { useAppSelector } from "../../../../app/hooks";

const Explore = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const handleClick = (componentNumber: number) => {
    if (componentNumber === 1) {
      setIsVisible1(!isVisible1);
    } else if (componentNumber === 2) {
      setIsVisible2(!isVisible2);
    } else if (componentNumber === 3) {
      setIsVisible3(!isVisible3);
    } else if (componentNumber === 4) {
      setIsVisible4(!isVisible4);
    }
  };
  const user = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
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
          Explore
        </h1>

        <div className="flex absolute bottom-[13px] left-9 gap-[41px]">
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(1);
              setIsVisible2(false);
              setIsVisible3(false);
              setIsVisible4(false);
            }}
          >
            All
          </h2>
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(2);
              setIsVisible1(false);
              setIsVisible3(false);
              setIsVisible4(false);
            }}
          >
            Tracks
          </h2>
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(3);
              setIsVisible1(false);
              setIsVisible2(false);
              setIsVisible4(false);
            }}
          >
            Albums
          </h2>
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(4);
              setIsVisible1(false);
              setIsVisible2(false);
              setIsVisible3(false);
            }}
          >
            Artists
          </h2>
        </div>
      </div>
      <div className="flex flex-col relative ">
        {isVisible1 && <All />}
        {isVisible2 && <Tracks />}
        {isVisible3 && <Albums />}
        {isVisible4 && <Artists />}
      </div>
    </div>
  );
};
export default Explore;
