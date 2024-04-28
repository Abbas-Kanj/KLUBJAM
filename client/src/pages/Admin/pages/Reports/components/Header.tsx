import headerBgImg from "../../../assets/images/dark-gray-blur-background-vector.jpg";
const Header = () => {
  return (
    <div className="w-[1304px] h-[180px] relative">
      <img src={headerBgImg} alt="" className="h-[180px] w-[1304px] absolute" />
      <h1 className="mt-[67px] ml-[25px] font-semibold text-[38px] relative">
        Reports
      </h1>
    </div>
  );
};

export default Header;
