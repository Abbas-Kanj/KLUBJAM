import bgHeader from "../../../assets/Navbar/images/Rectangle 169.png";
import { useAppSelector } from "../../../../app/hooks";

const Account = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
      <div className="h-[272px] relative">
        <img
          src={bgHeader}
          alt=""
          className="w-full h-full object-center absolute inset-0"
        />

        <div className="relative flex ml-[77px]">
          <img
            src={user.info?.profile_picture}
            alt=""
            className="w-[140px] h-[140px] mt-[80px] rounded-full"
          />
          <div className=" flex flex-col ml-[23px] mt-[110px]">
            <h1 className="font-semibold text-[44px]">{user.info?.username}</h1>
          </div>
        </div>
      </div>
      <div className="flex relative mt-[26px] mx-auto gap-[80px] mb-[50px]">
        <div className="flex flex-col gap-2">
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
          <label htmlFor="" className="font-semibold text-[14px] text-greyText">
            Biography
          </label>
          <textarea
            name=""
            id=""
            className=" bg-inputBox rounded-lg w-[462px] h-[200px] p-2 focus:outline-none"
          ></textarea>
        </div>

        <div className="flex flex-col gap-[10px]">
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
          <button className="w-[146px] rounded-xl text-primary border border-solid border-primary bg-background font-medium text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center ml-[320px]">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
