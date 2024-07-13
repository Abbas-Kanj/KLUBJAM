import React, { useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

interface DecodedToken {
  role: number;
  exp: any;
}

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (email == "" || password == "") {
      toast.error("Please fill empty fields");
      return false;
    } else {
      return true;
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validating if all input fields passed
    if (validateForm()) {
      let data = {
        email: email,
        password: password,
      };
      try {
        const res = await sendRequest("POST", "auth/login", data);
        if (res.status === 200) {
          toast("Welcome Jammer!");
          const userData = res.data.result.user;
          dispatch(setUser(userData));

          const token = res.data.result.token;
          const decodedToken: DecodedToken = jwtDecode(token);
          const cookies = new Cookies();

          try {
            cookies.remove("auth_token");
            cookies.set("auth_token", token, {
              expires: new Date(decodedToken.exp * 1000),
            });
            if (decodedToken.role === 1) {
              navigate("/Admin/Analytics");
            } else if (decodedToken.role === 2) {
              navigate("/Moderator/Tracks");
            } else {
              navigate("/Musician/Home");
            }
          } catch (error) {
            console.error("Error setting or removing cookie:", error);
          }
        }
      } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  };

  return (
    <form
      id="form"
      noValidate
      onSubmit={handleLogin}
      className="flex flex-col mt-[125px] mb-[72px] gap-[16px] "
    >
      <div className="flex flex-col w-[375px] h-[68px] gap-[6px]">
        <label htmlFor="email" className="text-[14px] font-small">
          Enter your username
        </label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={email}
          autoComplete="email"
          placeholder="GrooveGuru@example.com"
          className="w-[375px] h-[44px] pt-[14px] pb-[14px] 
                pl-[18px] placeholder:font-semibold placeholder:text-[16px] 
                placeholder:gray-500 bg-transparent border-solid border-[2px] 
                rounded-[5px] border-gray-500 focus:outline-none focus:shadow-outline 
                focus:text-primary active:text-primary"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-[375px] h-[68px] gap-[6px]">
        <label htmlFor="password" className="text-[14px] font-medium">
          Enter your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          required
          value={password}
          className="w-[375px] h-[44px] pt-[14px] pb-[14px] pl-[18px] 
                placeholder:font-bold placeholder:text-[18px] placeholder:text-white
                 bg-transparent ring-1 rounded-[5px]
                  focus:outline-none focus:shadow-outline focus:text-primary"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="w-[372px] h-[42px] overflow-hidden rounded-[10px] bg-primary font-medium shadow-drop"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default SigninForm;
