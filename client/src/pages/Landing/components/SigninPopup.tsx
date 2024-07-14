import React from "react";
import siginImg from "../../assets/Auth/Rectangle 36.png";
import SigninForm from "./SigninForm";

interface SigninPopupProps {
  setOpenSigninPopup: (open: boolean) => void;
  setOpenSignupPopup: (open: boolean) => void;
}

const SigninPopup: React.FC<SigninPopupProps> = ({
  setOpenSigninPopup,
  setOpenSignupPopup,
}) => {
  return (
    <section className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[930px] h-[656px] flex">
        <div className="w-[450px] relative flex flex-col">
          <div className="relative z-10 mt-[110px] ml-[30px] gap-[20px] flex flex-col ">
            <h2 className="text-[20px]">Welcome back!</h2>
            <h1 className="font-bold text-[24px] text-left">
              Jammers in the KLUB are <br /> excited for your comeback!
            </h1>
          </div>
          <img
            src={siginImg}
            alt="siginImg"
            className="absolute top-0 left-0 z-0"
          />
        </div>
        <div className="flex flex-col justify-around items-center h-full w-[480px] bg-backgroundPurple bg-opacity-80 rounded-r-[20px] pt-[74px] relative">
          <p
            className="absolute top-5 right-7 font-bold text-black cursor-pointer hover:text-white"
            onClick={() => {
              setOpenSigninPopup(false);
            }}
          >
            X
          </p>
          <div className="flex flex-col justify-start items-start w-full pl-[50px] gap-[10px]">
            <h1 className="font-bold text-[24px]">Login to your account</h1>
            <h2 className="text-[16px] text-greyText">
              Please fill your credentials below
            </h2>
          </div>
          <SigninForm />
          <div className="flex flex-col p-[10px] mb-[68px] gap-[10px]">
            <div className="flex items-center justify-center gap-[12px] mb-[30px]">
              <p className="text-base font-medium text-white">
                Don't have an account?
              </p>
              <p
                className="w-auto h-auto text-base text-primary font-medium hover:underline decoration-primary cursor-pointer"
                onClick={() => {
                  setOpenSigninPopup(false);
                  setOpenSignupPopup(true);
                }}
              >
                Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigninPopup;
