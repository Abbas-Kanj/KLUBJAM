import albumImg from "../../../../assets/Explore/images/Rectangle 76-5.png";

const Albums = () => {
  return (
    <div className="mb-[40px] flex flex-wrap ml-[85px] mr-[83px] gap-[22px] items-center">
      <div className="w-[210px] h-[242px] flex flex-col justify-start">
        <img src={albumImg} alt="" className="w-[210px] h-[210px]" />
        <h2 className="font-medium text-[12px] mt-[6px]">Birds</h2>
        <h2 className="font-medium text-[12px] text-greyText">Emmanuel</h2>
      </div>
    </div>
  );
};

export default Albums;
