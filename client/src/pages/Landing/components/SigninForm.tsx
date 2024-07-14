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

  const [emailError, setEmailError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

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
      className="flex flex-col gap-[8px]"
    >
      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text text-white font-semibold text-sm">
            Enter you email address
          </span>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="ex. GrooveGuru@example.com"
          value={email}
          className={`input input-bordered w-full bg-transparent 
          border-2 border-solid 
            ${email ? "border-primary" : "border-gray-500"}
          ${!isValidEmail ? "border-pink-600 text-pink-600" : ""}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError === "" ? (
          <></>
        ) : (
          <p className="text-sm text-pink-600 font-semibold animate-jump-in mt-2">
            {emailError}
          </p>
        )}
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text text-white font-semibold text-sm">
            Enter your password
          </span>
        </div>
        <label className="flex items-center gap-2 relative">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="••••••••••"
            value={password}
            className={`input input-bordered w-full bg-transparent 
          border-2 border-solid  
          ${password ? "border-primary" : "border-gray-500"}
          ${!isValidPassword ? "border-pink-600 text-pink-600" : ""}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        {passwordError === "" ? (
          <></>
        ) : (
          <p className="text-sm text-pink-600 font-semibold animate-jump-in mt-2">
            {passwordError}
          </p>
        )}
      </label>
      <button
        className="w-[372px] h-[42px] mt-[27px] overflow-hidden rounded-[10px]
         bg-primary font-medium shadow-drop tracking-wide
         transition-transform transform hover:scale-105 hover:bg-cyan-500 active:scale-95"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default SigninForm;
