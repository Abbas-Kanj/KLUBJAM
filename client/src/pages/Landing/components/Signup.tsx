import React from "react";
import sigunImg from "../../assets/Auth/Rectangle 36 (1).png";

interface SignUpProps {
  setOpenSignupPopup: (open: boolean) => void;
  setOpenSigninPopup: (open: boolean) => void;
}

const Signup: React.FC<SignUpProps> = ({
  setOpenSignupPopup,
  setOpenSigninPopup,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[930px] h-[656px] flex">
        <div className="w-[450px] relative flex flex-col">
          <div className="relative z-10 mt-[110px] ml-[30px] gap-[20px] flex flex-col">
            <h2 className="text-[20px]">Still dont have an account?</h2>
            <h1 className="font-bold text-[24px] text-left">
              Dive into KLUBJAM's world now
              <br /> and start creating!
            </h1>
          </div>

          <img src={sigunImg} alt="" className="absolute top-0 left-0 z-0" />
        </div>
        <form className="flex flex-col justify-around items-center h-full w-[480px] bg-backgroundPurple bg-opacity-80 rounded-r-[20px] relative">
          <p
            className="absolute top-5 right-7 font-bold text-black cursor-pointer"
            onClick={() => {
              setOpenSignupPopup(false);
            }}
          >
            X
          </p>
          <div className="flex flex-col justify-start items-start w-full pl-[50px]  mt-[34px] mb-[18px]">
            <h1 className="font-bold text-[24px]">Create new account</h1>
            <h2 className="text-[16px] text-greyText">
              Please fill your credentials below
            </h2>
          </div>
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-col w-[375px] gap-[8px]">
              <label htmlFor="" className="text-[12px] font-medium">
                Enter your username
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="GrooveGuru"
                className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px]  placeholder:font-semibold placeholder:text-[16px] placeholder:text-white bg-transparent border-solid border-[1px] rounded-[5px] focus:outline-none focus:shadow-outline focus:text-primary"
              />
            </div>
            <div className="flex flex-col w-[375px] gap-[8px]">
              <label htmlFor="" className="text-[12px] font-medium">
                Enter your email
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="GrooveGuru@example.com"
                className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px]  placeholder:font-semibold placeholder:text-[16px] placeholder:text-white bg-transparent border-solid border-[1px] rounded-[5px] focus:outline-none focus:shadow-outline focus:text-primary"
              />
            </div>

            <div className="flex flex-col w-[375px] gap-[8px]">
              <label htmlFor="" className="text-[12px] font-medium">
                New password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="**********"
                className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px]  placeholder:font-bold placeholder:text-[18px] placeholder:text-white bg-transparent border-solid border-[1px] rounded-[5px] focus:outline-none focus:shadow-outline focus:text-primary"
              />
            </div>
            <div className="flex flex-col w-[375px] gap-[8px]">
              <label htmlFor="" className="text-[12px] font-medium">
                Confirm password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="**********"
                className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px]  placeholder:font-bold placeholder:text-[18px] placeholder:text-white bg-transparent border-solid border-[1px] rounded-[5px] focus:outline-none focus:shadow-outline focus:text-primary"
              />
            </div>
          </div>
          <div className="flex flex-col  gap-[10px] mt-[27px]">
            <button className="w-[372px] h-[42px] overflow-hidden rounded-[10px] bg-primary font-medium shadow-drop">
              Create Account
            </button>
            <div className="flex items-center justify-center gap-[12px] mb-[60px]">
              <p className="text-[14px] font-medium text-greyText">
                Already have an account?
              </p>
              <p
                className="w-auto h-auto text-[14px] font-medium border-primary border-solid border-b-2 cursor-pointer"
                onClick={() => {
                  setOpenSignupPopup(false);
                  setOpenSigninPopup(true);
                }}
              >
                Login
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
