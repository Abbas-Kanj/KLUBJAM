import bgHeader from "../../../assets/Navbar/images/Rectangle 75 (4).png";

import React from "react";

const Header = () => {
  return (
    <div className=" h-[180px]">
      <img
        src={bgHeader}
        alt=""
        className="w-full h-auto object-cover opacity-40"
      />
    </div>
  );
};

export default Header;
