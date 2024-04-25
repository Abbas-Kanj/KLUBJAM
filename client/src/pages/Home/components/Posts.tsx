import React from "react";
import defaultLogo from "../../../assets/Navbar/images/user-profile-circle.svg";
import post from "../../../assets/Home/images/Rectangle 80.png";
import like from "../../../assets/Home/icons/like.svg";
import comment from "../../../assets/Home/icons/comment.svg";
import share from "../../../assets/Home/icons/forward.svg";

const Posts = () => {
  return (
    <div className="ml-[350px] mt-[48px]">
      <div className="flex flex-col  mb-[40px]">
        <div className="flex items-center gap-[8px]">
          <img src={defaultLogo} alt="" />
          <h2 className="font-medium text-[12px]">01chan_sw - 3h</h2>
        </div>
        <div
          className="pt-[40px] pb-[40px] pr-[60px] pl-[60px] border-[1px] border-solid border-greyText
         w-[436px] mt-[12px] mb-[12px]"
        >
          <img src={post} alt="" />
        </div>
        <div className="flex gap-[18px]">
          <img src={like} alt="" className="cursor-pointer" />
          <img src={comment} alt="" className="cursor-pointer" />
          <img src={share} alt="" className="cursor-pointer" />
        </div>
        <div className="mt-[20px] mb-[20px]">
          <h2 className="font-medium text-[14px]">748 likes</h2>
          <div className="flex gap-[8px]">
            <h2 className="font-medium text-[14px]">01chan_sw</h2>
            <h2 className="text-[14px]">
              Check out this movie that just dropped!
            </h2>
          </div>
        </div>
        <div>
          <h2 className="font-medium text-[14px] text-greyText">
            View all comments
          </h2>
          <input
            type="text"
            className="font-medium text-[14px] text-greyText bg-transparent focus:border-transparent"
            placeholder="Add a comment..."
          />

          <div className="border-b  border-solid border-greyText w-[436px] mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
