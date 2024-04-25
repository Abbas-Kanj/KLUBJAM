import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="flex flex-col w-[1304px] relative right-0 top-0 left-[15%]">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
