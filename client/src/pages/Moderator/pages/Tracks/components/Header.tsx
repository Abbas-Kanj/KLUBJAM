import headerBgImg from "../../../../Admin/assets/images/dark-gray-blur-background-vector.jpg";
const Header = () => {
  return (
    <div className="w-full h-[180px] relative">
      <img src={headerBgImg} alt="" className="h-[180px] w-full absolute" />
      <h1 className="mt-[67px] ml-[25px] font-semibold text-[38px] relative">
        Tracks
      </h1>
    </div>
  );
};

export default Header;
