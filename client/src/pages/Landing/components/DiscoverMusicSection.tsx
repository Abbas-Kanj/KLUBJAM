import sec3Img1 from "/images/Rectangle 25.png";
import sec3Img2 from "/images/Rectangle 26.png";
import sec3Img3 from "/images/Rectangle 27.png";
import sec3Img4 from "/images/Rectangle 28.png";
import magicPattern3 from "/images/MagicPattern.design (3).png";

const DiscoverMusicSection = () => {
  return (
    <section className="flex flex-col w-full">
      <img
        src={magicPattern3}
        alt=""
        className="absolute object-cover w-screen h-auto top-[50%] left-0 z-0"
      />
      <div className="mt-52 flex flex-col text-center self-start relative z-20 ml-10 w-fit">
        <h1 id="music" className="font-black text-5xl px-6">
          Discover New Music
        </h1>
        <div className="mb-5 mt-4 rounded-full h-1 shadow-drop w-full bg-primary"></div>
        <p className="text-2xl font-semibold">
          Explore a music feed where you can browse playlists,
          <br /> discover new genre and
          <br /> find personalized music recommendations
        </p>
      </div>
      <div className="flex mt-32 justify-center gap-14 relative z-20">
        <div className="flex flex-col justify-start ">
          <img src={sec3Img1} alt="Track Cover" className="w-60 h-72" />
          <h2 className="text-2xl font-bold">Retro</h2>
          <h3 className="text-2xl font-light">Electronic</h3>
        </div>
        <div className="flex flex-col justify-start ">
          <img src={sec3Img2} alt="Track Cover" className="w-60 h-72" />
          <h2 className="text-2xl font-bold">Sundown</h2>
          <h3 className="text-2xl font-light">Indian</h3>
        </div>
        <div className="flex flex-col justify-start ">
          <img src={sec3Img4} alt="Track Cover" className="w-60 h-72" />
          <h2 className="text-2xl font-bold">Heatin' Up</h2>
          <h3 className="text-2xl font-light">Rock</h3>
        </div>
        <div className="flex flex-col justify-start ">
          <img src={sec3Img3} alt="Track Cover" className="w-60 h-72" />
          <h2 className="text-2xl font-bold">Mirror Delusion</h2>
          <h3 className="text-2xl font-light">Indie</h3>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMusicSection;
