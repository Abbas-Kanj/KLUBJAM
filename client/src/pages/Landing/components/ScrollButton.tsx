import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [buttonDisplay, setButtonDisplay] = useState("hidden");
  window.onscroll = () => {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      return setButtonDisplay("block");
    } else return setButtonDisplay("hidden");
  };

  return (
    <button
      className={`fixed bottom-5 right-5 bg-primary cursor-pointer p-3 border-solid
         border-primary border-2 rounded-full z-50 opacity-50 
         hover:opacity-90 transition-all duration-150 ease-out md:ease-in ${buttonDisplay}`}
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FaArrowUp className="fill-black" />
    </button>
  );
};

export default ScrollButton;
