import sec2Img1 from "/images/Rectangle 11.png";
import sec2Img2 from "/images/Rectangle 12.png";
import sec2Img3 from "/images/Rectangle 13.png";
import magicPattern1 from "/images/MagicPattern.design (2).png";

const CommunitySection = () => {
  return (
    <section className="flex flex-col w-screen z-10">
      <img
        src={magicPattern1}
        alt=""
        className="absolute object-cover h-auto bottom-[55%] left-0 z-10"
      />
      <div className="mt-52 flex flex-col self-end text-center items-center justify-center pr-10 relative z-10 w-fit">
        <h1 id="community" className="font-black text-5xl px-6">
          Join the KLUB
        </h1>
        <div className="mb-5 mt-4 rounded-full h-1 shadow-drop w-full bg-primary"></div>
        <p className="text-2xl font-semibold">
          Connect now and join a community where you
          <br /> can interact with others, share your music,
          <br /> and engage with like-minded individuals.
        </p>
      </div>

      <div className="h-[1000px] w-full relative z-20">
        <div className="absolute top-0 left-[10%]">
          <h2 className=" text-[25px] font-bold">Interact with others</h2>
          <img src={sec2Img2} alt="" className="mt-[27px]" />
        </div>
        <div className="absolute top-[16%] right-[10%]">
          <h2 className="text-[25px] font-bold">Share Music </h2>
          <img src={sec2Img1} alt="" className="mt-[27px]" />
        </div>
        <div className="absolute top-[50%] left-[25%]">
          <h2 className="text-[25px] font-bold">Engage with the like minded</h2>
          <img src={sec2Img3} alt="" className="mt-[27px]" />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
