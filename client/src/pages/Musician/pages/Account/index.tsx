import bgHeader from "../../../assets/Navbar/images/Rectangle 169.png";
import defaultLogo from "../../../assets/Navbar/images/Ellipse 38.svg";

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
      <div className="flex flex-col relative mt-[26px] ml-[372px]">
        <h2 className="text-greyText font-semibold text-[14px]">Avatar</h2>
        <img
          src={defaultLogo}
          alt=""
          className="w-[164px] h-[164px] mb-[26px] mt-[30px]"
        />
        <div className="flex flex-col gap-[24px] mb-[50px]">
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor=""
              className="font-semibold text-[14px] text-greyText"
            >
              Username
            </label>
            <input
              type="text"
              className="bg-inputBox w-[462px] h-[50px] rounded focus:outline-none p-1"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor=""
              className="font-semibold text-[14px] text-greyText"
            >
              Country
            </label>
            <input
              type="text"
              className="bg-inputBox w-[462px] h-[50px] rounded focus:outline-none p-1"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              htmlFor=""
              className="font-semibold text-[14px] text-greyText"
            >
              Biography
            </label>
            <textarea
              name=""
              id=""
              className=" bg-inputBox rounded-lg w-[462px] h-[200px] p-2 focus:outline-none"
            ></textarea>
            <div className="border border-solid border-greyText w-[462px] mt-[38px] mb-[40px]"></div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Fullname
              </label>
              <input
                type="text"
                className="bg-inputBox w-[462px] h-[50px] rounded focus:outline-none p-1"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Email Address
              </label>
              <input
                type="text"
                className="bg-inputBox w-[462px] h-[50px] rounded focus:outline-none p-1"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="bg-inputBox w-[462px] h-[50px] rounded focus:outline-none p-1"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Date of Birth
              </label>
              <input
                type="text"
                className="bg-inputBox w-[462px] h-[50px] rounded focus:outline-none p-1"
              />
            </div>
            <div className="border border-solid border-greyText w-[462px] mt-[38px] mb-[40px]"></div>
            <button className="w-[146px] rounded-xl text-primary border border-solid border-primary bg-background font-medium text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center ml-[320px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
