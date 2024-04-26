import bgHeader from "../../assets/Navbar/images/dark-blue-blur-background-vector.jpg";
const Account = () => {
  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
      <div className="h-[180px] relative">
        <img
          src={bgHeader}
          alt=""
          className="w-full h-full object-center absolute inset-0"
        />

        <h1 className="relative mt-[67px] mb-[67px] ml-[35px] font-semibold text-[38px]">
          Account
        </h1>
      </div>
      <div className="flex flex-col relative ">
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Account;
