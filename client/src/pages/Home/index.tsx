import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="flex flex-col w-[1295px] absolute right-0">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
