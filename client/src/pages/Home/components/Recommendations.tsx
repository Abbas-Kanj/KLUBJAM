import recommendedLogo from "../../../assets/Home/images/Ellipse 36.svg";
import post from "../../../assets/Home/icons/ic_baseline-post-add.svg";
import { useState } from "react";
import PostPopup from "./PostPopup";

const Recommendations = () => {
  const [openPostPopup, setOpenPostPopup] = useState(false);

  return (
    <div className="absolute top-0 right-0 mt-[37px] mr-[108px]">
      {openPostPopup && (
        <PostPopup setOpenPostPopup={setOpenPostPopup}></PostPopup>
      )}
      <div className="flex gap-[10px] w-[288px]">
        <input
          type="text"
          placeholder="Find a Jammer..."
          className="w-[207px] h-[36px] pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
        />
        <div
          className="flex items-center justify-center w-[71px] h-[36px] bg-primary rounded cursor-pointer"
          onClick={() => {
            setOpenPostPopup(true);
          }}
        >
          <img src={post} alt="" />
          <h2 className="font-bold text-[14px]">Post</h2>
        </div>
      </div>
      <h2 className="mt-[31px] mb-[16px]">Suggested for you</h2>
      <div>
        <div className="flex items-center w-[288px] mb-[14px]">
          <img src={recommendedLogo} alt="" />
          <div className="flex flex-col justify-between ml-[10px] mr-[130px]">
            <h2 className="font-medium text-[14px]">john-dx</h2>
            <h2 className="font-medium text-[12px] text-greyText">john Doe</h2>
          </div>
          <h2 className="font-medium text-[14px] text-primary">Follow</h2>
        </div>
        <div className="flex items-center w-[288px] mb-[14px]">
          <img src={recommendedLogo} alt="" />
          <div className="flex flex-col justify-between ml-[10px] mr-[130px]">
            <h2 className="font-medium text-[14px]">john-dx</h2>
            <h2 className="font-medium text-[12px] text-greyText">john Doe</h2>
          </div>
          <h2 className="font-medium text-[14px] text-primary">Follow</h2>
        </div>
        <div className="flex items-center w-[288px] mb-[14px]">
          <img src={recommendedLogo} alt="" />
          <div className="flex flex-col justify-between ml-[10px] mr-[130px]">
            <h2 className="font-medium text-[14px]">john-dx</h2>
            <h2 className="font-medium text-[12px] text-greyText">john Doe</h2>
          </div>
          <h2 className="font-medium text-[14px] text-primary">Follow</h2>
        </div>
        <div className="flex items-center w-[288px] mb-[14px]">
          <img src={recommendedLogo} alt="" />
          <div className="flex flex-col justify-between ml-[10px] mr-[130px]">
            <h2 className="font-medium text-[14px]">john-dx</h2>
            <h2 className="font-medium text-[12px] text-greyText">john Doe</h2>
          </div>
          <h2 className="font-medium text-[14px] text-primary">Follow</h2>
        </div>
        <div className="flex items-center w-[288px] mb-[14px]">
          <img src={recommendedLogo} alt="" />
          <div className="flex flex-col justify-between ml-[10px] mr-[130px]">
            <h2 className="font-medium text-[14px]">john-dx</h2>
            <h2 className="font-medium text-[12px] text-greyText">john Doe</h2>
          </div>
          <h2 className="font-medium text-[14px] text-primary">Follow</h2>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
