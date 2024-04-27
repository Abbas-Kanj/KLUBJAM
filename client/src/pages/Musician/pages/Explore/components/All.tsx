import trackImg from "../../../../assets/Explore/images/Rectangle 76-1.png";
import albumImg from "../../../../assets/Explore/images/Rectangle 77-1.png";
import artistImg from "../../../../assets/Explore/images/Ellipse 22.svg";

const All = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mt-[26px] ml-[33px]">
        <h2 className="font-bold text-[14px] mb-[26px]">New Tracks</h2>
        <div className="flex gap-[22px]">
          <div className="h-[162px]">
            <img src={trackImg} alt="" className="w-[130px] h-[130px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
          <div className="h-[162px]">
            <img src={trackImg} alt="" className="w-[130px] h-[130px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[60px] ml-[33px] mb-[92px]">
        <h2 className="font-bold text-[14px] mb-[26px]">New Albums</h2>
        <div className="flex gap-[22px]">
          <div className="h-[241px]">
            <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
          <div className="h-[241px]">
            <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[33px] mb-[50px]">
        <h2 className="font-bold text-[14px] mb-[26px]">New Artists</h2>
        <div className="flex gap-[28px]">
          <div className="flex flex-col justify-center items-center">
            <img src={artistImg} alt="" className="h-[70px] w-[70px]" />
            <h2 className="font-medium text-[12px]">Big munna</h2>
            <h3 className="text-[10px] text-greyText">10 followers</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={artistImg} alt="" className="h-[70px] w-[70px]" />
            <h2 className="font-medium text-[12px]">Big munna</h2>
            <h3 className="text-[10px] text-greyText">10 followers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;