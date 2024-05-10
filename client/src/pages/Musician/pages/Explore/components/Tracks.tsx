import downArrow from "../../../../assets/Workspace/icons/chevron-down.svg";
import albumImg from "../../../../assets/Explore/images/Rectangle 77-1.png";
import note from "../../../../assets/Workspace/icons/note-02.svg";

const Tracks = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[26px]">
      <div className="flex gap-[10px] w-fit h-[36px]">
        <input
          type="text"
          placeholder="Find a track..."
          className="w-[516px]  pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
        />
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
          <h2 className="font-bold text-[14px] text-greyText">Genre</h2>
          <img src={downArrow} alt="" />
        </div>
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
          <h2 className="font-bold text-[14px] text-greyText">Sort</h2>
          <img src={downArrow} alt="" />
        </div>
        <div className="flex items-center justify-center w-[90px] h-[36px] bg-primary rounded cursor-pointer pt-[6px] pb-[6px] pl-[15px] pr-[15px] gap-[2px] hover:opacity-70">
          <img src={note} alt="" />
          <h2 className="font-bold text-[14px]">Upload</h2>
        </div>
      </div>
      <div className="border border-solid border-greyText w-[786px] mt-[15px]"></div>
      <div className="mt-[17px] mb-[30px]  w-[1133px] flex flex-wrap gap-[22px] items-center">
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
