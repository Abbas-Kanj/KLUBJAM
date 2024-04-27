import downArrow from "../../../../assets/Workspace/icons/chevron-down.svg";
import artistImg from "../../../../assets/Explore/images/Ellipse 22.svg";

const Artists = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[26px]">
      <div className="flex gap-[10px] w-fit h-[36px]">
        <input
          type="text"
          placeholder="Find an artist..."
          className="w-[516px]  pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
        />
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
          <h2 className="font-bold text-[14px] text-greyText">Rating</h2>
          <img src={downArrow} alt="" />
        </div>
        <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
          <h2 className="font-bold text-[14px] text-greyText">Sort</h2>
          <img src={downArrow} alt="" />
        </div>
      </div>
      <div className="border border-solid border-greyText w-[686px] mt-[15px]"></div>
      <div className="mt-[17px] mb-[30px]  w-[1133px] flex flex-wrap gap-[22px] items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={artistImg} alt="" className="h-[130px] w-[130px]" />
          <h2 className="font-medium text-[14px]">Big munna</h2>
          <h3 className="text-[12px] text-greyText">10 followers</h3>
        </div>
      </div>
    </div>
  );
};

export default Artists;
