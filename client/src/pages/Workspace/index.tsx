import bgHeader from "../../assets/Navbar/images/dark-green-abstract-blur-background-vector.jpg";
import defaultLogo from "../../assets/Navbar/images/user-profile-circle.svg";
import { useState } from "react";
import PersonalProjects from "./components/PersonalProjects";
import GroupProjects from "./components/GroupProjects";
const Workspace = () => {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);

  const handleClick = (componentNumber: number) => {
    if (componentNumber === 1) {
      setIsVisible1(!isVisible1);
    } else if (componentNumber === 2) {
      setIsVisible2(!isVisible2);
    }
  };
  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
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
      <div className="flex flex-col relative ">
        {isVisible1 && <PersonalProjects />}
        {isVisible2 && <GroupProjects />}
      </div>
    </div>
  );
};

export default Workspace;
