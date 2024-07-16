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
  const [passwordError, setPasswordError] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
  };

  const validateUsername = (username: string) => {
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

  const validateEmail = (email: string) => {
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

  const validatePassword = (password: string) => {
    const lowerCase = /(?=.*[a-z])/;
    const upperCase = /(?=.*[A-Z])/;
    const oneDigit = /(?=.*\d)/;
    const oneSpecialCharacter = /(?=.*[@$!%*?&])/;
    const atleastEightCharactersLong = /[A-Za-z\d@$!%*?&]{8,}/;
    if (password === "") {
      setPasswordError("Password cannot be empty");
      setIsValidPassword(false);
      return;
    } else if (!lowerCase.test(password)) {
      setPasswordError("Password must contain atleast one lower character");
      setIsValidPassword(false);
      return;
    } else if (!upperCase.test(password)) {
      setPasswordError("Password must contain atleast one upper character");
      setIsValidPassword(false);
      return;
    } else if (!oneDigit.test(password)) {
      setPasswordError("Password must contain atleast a number");
      setIsValidPassword(false);
      return;
    } else if (!oneSpecialCharacter.test(password)) {
      setPasswordError("Password must contain atleast a special character");
      setIsValidPassword(false);
      return;
    } else if (!atleastEightCharactersLong.test(password)) {
      setPasswordError("Password must be atleast eight characters long");
      setIsValidPassword(false);
      return;
    } else {
      setPasswordError("");
      setIsValidPassword(true);
      return;
    }
  };

  return (
    <form
      id="form"
      noValidate
      onSubmit={handleSignup}
      className="flex flex-col gap-[4px]"
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
          className={`input input-bordered w-full bg-transparent 
          border-2 border-solid  
          ${username ? "border-primary" : "border-gray-500"} 
          ${!isValidUsername ? "border-red-600 text-red-600" : " "} 
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => {
            SetUsername(e.target.value);
            validateUsername(e.target.value);
          }}
        />
        {usernameError === "" ? (
          <></>
        ) : (
          <p className="text-sm text-red-600 font-semibold animate-jump-in mt-2">
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
          placeholder="ex. GrooveGuru@example.com"
          value={email}
          className={`input input-bordered w-full bg-transparent 
          border-2 border-solid 
            ${email ? "border-primary" : "border-gray-500"}
          ${!isValidEmail ? "border-red-600 text-red-600" : ""}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        {emailError === "" ? (
          <></>
        ) : (
          <p className="text-sm text-red-600 font-semibold animate-jump-in mt-2">
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
        <label className="flex items-center gap-2 relative">
          <input
            type={isPasswordHidden ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="••••••••••"
            value={password}
            className={`input input-bordered w-full bg-transparent 
          border-2 border-solid  
          ${password ? "border-primary" : "border-gray-500"}
          ${!isValidPassword ? "border-red-600 text-red-600" : ""}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          {isPasswordHidden ? (
            <FaEye
              onClick={() => setIsPasswordHidden((prevState) => !prevState)}
              className="h-4 w-4 cursor-pointer absolute right-3"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setIsPasswordHidden((prevState) => !prevState)}
              className="h-4 w-4 cursor-pointer absolute right-3"
            />
          )}
        </label>
        {passwordError === "" ? (
          <></>
        ) : (
          <p className="text-sm text-red-600 font-semibold animate-jump-in mt-2">
            {passwordError}
          </p>
        )}
      </label>
      <button
        className="w-[372px] h-[42px] mt-[27px] overflow-hidden rounded-[10px]
         bg-primary font-medium shadow-drop tracking-wide
         hover:shadow-drop opacity-80 hover:opacity-100 transition-all duration-100 ease-out md:ease-in"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
