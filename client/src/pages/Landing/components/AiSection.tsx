import line from "/images/Line.png";
import magicPattern2 from "/images/MagicPattern.design (1).png";
import sec4Img1 from "/images/Rectangle 29.png";
import sec4Img2 from "/images/Rectangle 30.png";
import sec4Img3 from "/images/Rectangle 31.png";
import sec4Img4 from "/images/Rectangle 32.png";
import sec4Img5 from "/images/Rectangle 33.png";
import sec4Img6 from "/images/Rectangle 34.png";
import sec4Img7 from "/images/Rectangle 35.png";
const AiSection = () => {
  return (
    <section className="flex flex-col w-full  overflow-hidden z-10">
      <div className=" mt-[202px] ml-[828px] flex flex-col text-center relative w-fit z-20">
        <h1 id="AI" className="  font-black text-[45px] ">
          Create Music with AI
        </h1>
        <img src={line} className="mb-[19px] mt-[9px] m shadow-drop" alt="" />
        <p className="text-[20px]  font-semibold">
          Craft your musical masterpiece by entering your lyrics,
          <br /> choosing the style of your favourite artist,
          <br />
          resulting a song reflecting your creative vision.
        </p>
      </div>
      <img
        src={magicPattern2}
        alt=""
        className="absolute object-cover w-screen h-auto bottom-[7%] left-0 z-10"
      />
      <div className="flex justify-around w-screen mt-[140px] relative z-20 h-auto">
        <div>
          <h2 className="text-[25px] font-bold">
            Insert your favourite <br /> lyrics
          </h2>
          <img src={sec4Img7} alt="" className="mt-[15px] shadow-black" />
        </div>
        <div>
          <h2 className="text-[25px] font-bold">
            Choose your favourite <br /> artist voice{" "}
          </h2>
          <div className="flex flex-wrap w-[370px] gap-2 mt-[15px]">
            <img src={sec4Img1} alt="" />
            <img src={sec4Img2} alt="" />
            <img src={sec4Img3} alt="" />
            <img src={sec4Img4} alt="" className="mt-[22px]" />
            <img src={sec4Img5} alt="" className="mt-[22px]" />
            <img src={sec4Img6} alt="" className="mt-[22px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;
