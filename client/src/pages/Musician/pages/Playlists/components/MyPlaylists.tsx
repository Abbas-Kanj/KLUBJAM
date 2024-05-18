import albumImg from "../../../../assets/Explore/images/Rectangle 77-1.png";

const MyPlaylists = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[26px]">
      <div className="mt-[17px] mb-[30px]  w-[1133px] flex flex-wrap gap-[22px] items-center">
        <div className="w-[209px] h-[241px] flex flex-col justify-start">
          <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
          <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
        </div>
      </div>
    </div>
  );
};

export default MyPlaylists;
