import bgHeader from "../../../assets/Navbar/images/Rectangle 164.png";
import { useState } from "react";
import PersonalProjects from "./components/PersonalProjects";
import GroupProjects from "./components/GroupProjects";
import SearchBar from "./components/SearchBar";
import { useAppSelector } from "../../../../app/hooks";
const Workspace = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const user = useAppSelector((state) => state.user);

  const handleClick = (componentNumber: number) => {
    if (componentNumber === 1) {
      setIsVisible1(!isVisible1);
    } else if (componentNumber === 2) {
      setIsVisible2(!isVisible2);
    }
  };
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
          Workspace
        </h1>

        <div className="flex absolute bottom-[13px] left-9 gap-[41px]">
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(1);
              setIsVisible2(false);
            }}
          >
            Personal Projects
          </h2>
          <h2
            className="text-[13px] font-bold hover:text-primary cursor-pointer text-greyText"
            onClick={() => {
              handleClick(2);
              setIsVisible1(false);
            }}
          >
            Group Projects
          </h2>
        </div>
      </div>
      <div className="flex flex-col relative items-center">
        <SearchBar />
        {isVisible1 && <PersonalProjects />}
        {isVisible2 && <GroupProjects />}
      </div>
    </div>
  );
};

export default Workspace;
