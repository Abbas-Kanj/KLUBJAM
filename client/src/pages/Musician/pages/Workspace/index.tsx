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
    <div className="flex flex-col w-full h-full gap-2 overflow-hidden mt-1">
      <div
        className="h-[140px] flex relative bg-base-200 text-base-content rounded-xl"
        style={{
          background:
            "linear-gradient(260deg, rgba(109,0,45,1) 20%, rgba(57,11,32,1) 33%, rgba(18,18,18,1) 60%)",
        }}
      >
        <img
          src={user.info?.profile_picture}
          alt=""
          className="absolute top-3 right-3 cursor-pointer w-[32px] rounded-full"
        />
        <h1 className="relative mt-11 mb-11 ml-9 font-semibold text-3xl">
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
      <div
        className="flex flex-col items-center h-[512px] min-w-full bg-base-200 text-base-content overflow-y-scroll rounded-xl"
        style={{
          background:
            "linear-gradient(220deg, rgba(109,0,45,1) 6%, rgba(57,11,32,1) 20%, rgba(18,18,18,1) 30%)",
        }}
      >
        <SearchBar />
        {isVisible1 && <PersonalProjects />}
        {isVisible2 && <GroupProjects />}
      </div>
    </div>
  );
};

export default Workspace;
