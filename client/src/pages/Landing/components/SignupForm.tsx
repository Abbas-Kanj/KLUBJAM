import { useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
  const [username, SetUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const [usernameError, setUserameError] = useState("");
  const [isValidUsername, setIsValidUsername] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateForm()) {
      let data = {
        username: username,
        email: email,
        password: password,
      };
      try {
        const res = await sendRequest("POST", "auth/register", data);
        if (res.status === 200) {
          toast.success("Account created successfully!");
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  const validateForm = () => {
    if (username == "" || email == "" || password == "") {
      toast.error("Please fill empty fields");
      return false;
    } else {
      return true;
    }
  };

  const validateUsername = () => {
    const pattern = /^[a-zA-Z0-9_]+$/;
    if (username === "") {
      setUserameError("Username cannot be empty");
      setIsValidUsername(false);
      return;
    } else if (!pattern.test(username)) {
      setUserameError("Username must not contain special characters");
      setIsValidUsername(false);
      return;
    } else if (username.length > 20 || username.length < 5) {
      setUserameError("Username must be between 5 and 20 characters");
      setIsValidUsername(false);
      return;
    } else {
      setUserameError("");
      setIsValidUsername(true);
      return;
    }
  };

  const validateEmail = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setEmailError("Email cannot be empty");
      setIsValidEmail(false);
      return;
    } else if (!pattern.test(email)) {
      setEmailError("Invalid email address");
      setIsValidEmail(false);
      return;
    } else {
      setEmailError("");
      setIsValidEmail(true);
      return;
    }
  };

  return (
    <form
      id="form"
      noValidate
      onSubmit={handleSignup}
      className="flex flex-col gap-[4px] "
    >
      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text text-white font-semibold text-sm">
            Username
          </span>
        </div>
        <input
          type="text"
          name="username"
          id="username"
          required
          placeholder="ex. GrooveGuru"
          value={username}
          className={`input input-bordered w-full max-w-xs bg-transparent 
          border-2 border-solid  
          ${username ? "border-primary" : "border-gray-500"}
          ${!isValidUsername ? "border-pink-600 text-pink-600" : ""}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => {
            SetUsername(e.target.value);
            validateUsername();
          }}
          onBlur={() => validateUsername()}
        />
        {usernameError === "" ? (
          <></>
        ) : (
          <p className="text-sm text-pink-600 font-semibold animate-jump-in mt-2">
            {usernameError}
          </p>
        )}
      </label>

      <label className="form-control w-full max-w-sm">
        <div className="label">
          <span className="label-text text-white font-semibold text-sm">
            Email address
          </span>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="ex. GrooveGuru"
          value={email}
          className={`input input-bordered w-full max-w-xs bg-transparent 
          border-2 border-solid 
            ${email ? "border-primary" : "border-gray-500"}
          ${!isValidEmail ? "border-pink-600 text-pink-600" : ""}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail();
          }}
          onBlur={() => validateEmail()}
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
            Password
          </span>
        </div>
        <label className="flex items-center gap-2">
          <input
            type={isPasswordHidden ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="••••••••••"
            value={password}
            className={`input input-bordered w-full max-w-xs bg-transparent 
          border-2 border-solid  ${
            password ? "border-primary" : "border-gray-500"
          }
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isPasswordHidden ? (
            <FaEye
              onClick={() => setIsPasswordHidden((prevState) => !prevState)}
              className="h-4 w-4 cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setIsPasswordHidden((prevState) => !prevState)}
              className="h-4 w-4 cursor-pointer"
            />
          )}
        </label>
      </label>

      <div className="flex flex-col gap-[10px] mt-[27px]">
        <button
          className="w-[372px] h-[42px] overflow-hidden rounded-[10px] bg-primary font-medium shadow-drop"
          type="submit"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
