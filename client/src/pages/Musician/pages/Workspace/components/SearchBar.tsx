import { useState } from "react";
import downArrow from "../../../../assets/Workspace/icons/chevron-down.svg";
import note from "../../../../assets/Workspace/icons/note-02.svg";
import CreateProjectPopup from "./createProjectPopup";

const SearchBar = () => {
  const [openCreateProjectPopup, setOpenCreateProjectPopup] = useState(false);

  return (
    <div className="flex gap-[10px] w-[776px] h-[36px]  mt-[26px]">
      {openCreateProjectPopup && (
        <CreateProjectPopup
          setOpenCreateProjectPopup={setOpenCreateProjectPopup}
        ></CreateProjectPopup>
      )}
      <input
        type="text"
        placeholder="Find a project..."
        className="w-[516px]  pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
      />
      <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
        <h2 className="font-bold text-[14px] text-greyText">Type</h2>
        <img src={downArrow} alt="" />
      </div>
      <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
        <h2 className="font-bold text-[14px] text-greyText">Sort</h2>
        <img src={downArrow} alt="" />
      </div>
      <div
        className="flex items-center justify-center w-[90px] h-[36px] bg-primary rounded cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[2px] hover:opacity-70"
        onClick={() => {
          setOpenCreateProjectPopup(true);
        }}
      >
        <img src={note} alt="" />
        <h2 className="font-bold text-[14px]">Create</h2>
      </div>
    </div>
  );
};

export default SearchBar;
