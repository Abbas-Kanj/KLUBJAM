import headerBgImg from "../../../assets/images/dark-gray-blur-background-vector.jpg";
const Header = () => {
  return (
    <div className="w-full h-[180px] flex relative">
      <img src={headerBgImg} alt="" className="h-[180px] absolute w-full" />
      <h1 className="mt-[67px] ml-[25px] font-semibold text-[38px] relative">
        Analytics
      </h1>
    </div>
  );
};

export default Header;
