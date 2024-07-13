import React, { useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import toast from "react-hot-toast";

const SignupForm = () => {
  const [username, SetUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    if (
      username == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      password !== confirmPassword
    ) {
      toast.error("Please fill empty fields");
      return false;
    } else {
      return true;
    }
  };

  return (
    <form
      id="form"
      noValidate
      onSubmit={handleSignup}
      className="flex flex-col gap-[4px]"
    >
      <label className="form-control w-full max-w-xs">
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
          border-2 border-solid  ${
            username ? "border-primary" : "border-gray-500"
          }
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => SetUsername(e.target.value)}
        />
      </label>

      <label className="form-control w-full max-w-xs">
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
          border-2 border-solid  ${email ? "border-primary" : "border-gray-500"}
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-white font-semibold text-sm">
            Password
          </span>
        </div>
        <input
          type="password"
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
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-white font-semibold text-sm">
            Confirm password
          </span>
        </div>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          placeholder="••••••••••"
          value={confirmPassword}
          className={`input input-bordered w-full max-w-xs bg-transparent 
          border-2 border-solid  ${
            confirmPassword ? "border-primary" : "border-gray-500"
          }
          placeholder:text-gray-500
            active:text-primary text-primary font-semibold
            focus:outline-none focus:shadow-outline focus:text-white focus:border-white`}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>

      <div className="flex flex-col  gap-[10px] mt-[27px]">
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
