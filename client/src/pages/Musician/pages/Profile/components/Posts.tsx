import post from "../../../../assets/Profile/images/Rectangle 91.png";

const Posts = () => {
  return (
    <div className="flex flex-wrap  justify-center gap-[14px] ml-[200px] mr-[200px] mb-[40px]">
      <img src={post} alt="" className="w-[290px] h-[280px]" />
      <img src={post} alt="" className="w-[290px] h-[280px]" />
      <img src={post} alt="" className="w-[290px] h-[280px]" />
      <img src={post} alt="" className="w-[290px] h-[280px]" />
      <img src={post} alt="" className="w-[290px] h-[280px]" />
      <img src={post} alt="" className="w-[290px] h-[280px]" />
    </div>
  );
};

export default Posts;
