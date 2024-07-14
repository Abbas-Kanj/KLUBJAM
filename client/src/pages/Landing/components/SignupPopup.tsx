import React from "react";
import signupImage from "../../assets/Auth/Rectangle 36 (1).png";
import SignupForm from "./SignupForm";

interface SignupPopupProps {
  setOpenSignupPopup: (open: boolean) => void;
  setOpenSigninPopup: (open: boolean) => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({
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

          <img
            src={signupImage}
            alt="signupImage"
            className="absolute top-0 left-0 z-0"
          />
        </div>
        <div className="flex flex-col justify-around items-center h-full w-[480px] bg-backgroundPurple bg-opacity-80 rounded-r-[20px] relative">
          <p
            className="absolute top-5 right-7 font-bold text-black cursor-pointer hover:text-white"
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
          <SignupForm />
          <div className="flex items-center justify-center gap-[12px] mb-[30px]">
            <p className="text-base font-medium text-white">
              Already have an account?
            </p>
            <p
              className="w-auto h-auto text-base text-primary font-medium hover:underline decoration-primary cursor-pointer"
              onClick={() => {
                setOpenSignupPopup(false);
                setOpenSigninPopup(true);
              }}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
