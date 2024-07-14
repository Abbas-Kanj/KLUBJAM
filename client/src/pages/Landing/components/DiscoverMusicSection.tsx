import sec3Img1 from "/images/Rectangle 25.png";
import sec3Img2 from "/images/Rectangle 26.png";
import sec3Img3 from "/images/Rectangle 27.png";
import sec3Img4 from "/images/Rectangle 28.png";
import magicPattern3 from "/images/MagicPattern.design (3).png";
import line from "/images/Line.png";

const DiscoverMusicSection = () => {
  return (
    <section className="flex flex-col w-full ">
      <img
        src={magicPattern3}
        alt=""
        className="absolute object-cover w-screen h-auto top-[50%] left-0 z-0"
      />
      <div className=" mt-[] ml-[185px] flex flex-col text-center relative z-20 w-fit">
        <h1 id="music" className="  font-black text-[45px] ">
          Discover New Music
        </h1>
        <img src={line} className="mb-[19px] mt-[9px] m shadow-drop" alt="" />
        <p className="text-[20px]  font-semibold">
          Explore a music feed where you can browse playlists,
          <br /> discover new genre and
          <br /> find personalized music recommendations
        </p>
      </div>
      <div className="flex mt-[123px] justify-center gap-[52px] relative z-20">
        <div className="flex flex-col justify-start ">
          <img src={sec3Img1} alt="" className="w-[243px] h-[294px]" />
          <h2 className="text-[25px] font-bold">Retro</h2>
          <h3 className="text-[25px] font-light">Electronic</h3>
        </div>
        <div className="flex flex-col justify-start ">
          <img src={sec3Img2} alt="" className="w-[243px] h-[294px]" />
          <h2 className="text-[25px] font-bold">Sundown</h2>
          <h3 className="text-[25px] font-light">Indian</h3>
        </div>
        <div className="flex flex-col justify-start ">
          <img src={sec3Img4} alt="" className="w-[243px] h-[294px]" />
          <h2 className="text-[25px] font-bold">Heatin' Up</h2>
          <h3 className="text-[25px] font-light">Rock</h3>
        </div>
        <div className="flex flex-col justify-start ">
          <img src={sec3Img3} alt="" className="w-[243px] h-[294px]" />
          <h2 className="text-[25px] font-bold">Mirror Delusion</h2>
          <h3 className="text-[25px] font-light">Indie</h3>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMusicSection;
