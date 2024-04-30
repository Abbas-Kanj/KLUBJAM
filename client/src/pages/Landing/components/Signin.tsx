import React, { useState } from "react";
import siginImg from "../../assets/Auth/Rectangle 36.png";
import { sendRequest } from "../../../core/remote/request";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/userSlice";
import { useDispatch } from "react-redux";

interface SignInProps {
  setOpenSigninPopup: (open: boolean) => void;
  setOpenSignupPopup: (open: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({
  setOpenSigninPopup,
  setOpenSignupPopup,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("error");

  const validateForm = () => {
    if (email == "" || password == "") {
      setError("Please fill empty fields");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleLogin = async () => {
    if (validateForm()) {
      let data = new FormData();
      data.append("email", email);
      data.append("password", password);
      try {
        // const body = JSON.stringify(data);
        const res = await sendRequest("POST", "auth/login", data);
        // const token = res.data.authorisation.token;
        if ((res.status = 200 && res.data)) {
          console.log(res.data);
          window.localStorage.setItem("token", res.data.result.token);
          // dispatch(setUser(res.data.user));
          console.log("sign in successfull");
          // navigate("/Musician/Home");
        }
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[930px] h-[656px] flex">
        <div className="w-[450px] relative flex flex-col">
          <div className="relative z-10 mt-[110px] ml-[30px] gap-[20px] flex flex-col">
            <h2 className="text-[20px]">Welcome back!</h2>
            <h1 className="font-bold text-[24px]">
              Jammers in the KLUB are <br /> excited for your comeback!
            </h1>
          </div>

          <img src={siginImg} alt="" className="absolute top-0 left-0 z-0" />
        </div>
        <form className="flex flex-col justify-around items-center h-full w-[480px] bg-backgroundPurple bg-opacity-70 rounded-r-[20px] pt-[74px] relative">
          <p
            className="absolute top-5 right-7 font-bold text-black cursor-pointer"
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
          <div className="flex flex-col mt-[125px] mb-[72px] gap-[16px] ">
            <div className="flex flex-col w-[375px] h-[68px] gap-[6px]">
              <label htmlFor="" className="text-[12px] font-medium">
                Enter your email
              </label>
              <input
                type="text"
                name=""
                id="email"
                placeholder="GrooveGuru@example.com"
                className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px]  placeholder:font-semibold placeholder:text-[16px] placeholder:text-white bg-transparent border-solid border-[1px] rounded-[5px] focus:outline-none focus:shadow-outline focus:text-primary"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[375px] h-[68px] gap-[6px]">
              <label htmlFor="" className="text-[12px] font-medium">
                Enter your password
              </label>
              <input
                type="password"
                name=""
                id="password"
                placeholder="****************"
                className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px]  placeholder:font-bold placeholder:text-[18px] placeholder:text-white bg-transparent border-solid border-[1px] rounded-[5px] focus:outline-none focus:shadow-outline focus:text-primary"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col p-[10px] mb-[68px] gap-[10px]">
            <button
              className="w-[372px] h-[42px] overflow-hidden rounded-[10px] bg-primary font-medium shadow-drop"
              onClick={(e) => {
                handleLogin();
                e.preventDefault();
              }}
            >
              Login
            </button>
            <div className="flex items-center justify-center gap-[12px]">
              <p className="text-[14px] font-medium text-greyText">
                Don't have an account?
              </p>
              <p
                className="w-auto h-auto text-[14px] font-medium border-primary border-solid border-b-2 cursor-pointer"
                onClick={() => {
                  setOpenSigninPopup(false);
                  setOpenSignupPopup(true);
                }}
              >
                SignUp
              </p>
            </div>
            {error && <small className="text-red">{error}</small>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
