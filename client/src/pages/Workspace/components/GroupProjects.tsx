import downArrow from "../../../assets/Workspace/icons/chevron-down.svg";
import note from "../../../assets/Workspace/icons/note-02.svg";
import star from "../../../assets/Workspace/icons/star.svg";
import circle from "../../../assets/Workspace/icons//circle.svg";

const GroupProjects = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[26px]">
      <div className="flex gap-[10px] w-[776px] h-[36px]">
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
        <div className="flex items-center justify-center w-[90px] h-[36px] bg-primary rounded cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[1px]">
          <img src={note} alt="" />
          <h2 className="font-bold text-[14px]">Post</h2>
        </div>
      </div>
      <div className="border border-solid border-greyText w-[776px] mt-[15px]"></div>
      <div className="flex flex-col mt-[18px]">
        <div className="flex justify-between items-center">
          <div className=" text-center items-center flex gap-[14px]">
            <h1 className="font-bold text-[20px] text-primary">KlubJam</h1>
            <h2 className=" w-[58px] h-[24px] font-bold text-[10px] border-[2px] border-solid border-greyText rounded-lg p-[4px] text-greyText cursor-pointer hover:text-primary hover:border-primary">
              Private
            </h2>
          </div>
          <div className="flex justify-center items-center w-[58px] h-[24px] border-[2px] border-solid border-greyText rounded-lg gap-[6px]  cursor-pointer hover:border-primary">
            <img src={star} alt="" className="w-[12px] h-[12px]" />
            <h2 className="font-bold text-[14px]  text-greyText  hover:text-primary hover:border-primary">
              star
            </h2>
          </div>
        </div>
        <div className="flex items-center mt-[9px] mb-[9px]">
          <img src={circle} alt="" className="mr-[6px]" />
          <h2 className="mr-[28px] font-bold text-[12px] text-greyText">R&B</h2>
          <h2 className="text-[13px] text-greyText">Updated 6 hours ago</h2>
        </div>
        <p className="text-[14px] text-greyText">
          This track features vibrant synths, a groovy bassline, and dynamic
          drums,<br></br> creating a lively and energetic vibe
        </p>
        <div className="border border-solid border-greyText w-[776px] mt-[15px]"></div>
      </div>
    </div>
  );
};

export default GroupProjects;
