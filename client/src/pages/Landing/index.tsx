import video from "../../assets/LandingPage/full-vid.mp4";
import logo from "../../assets/LandingPage/images/image 4.svg";
import line from "../../assets/LandingPage/Line 1.png";
import sec1Img1 from "../../assets/LandingPage/images/Rectangle 7.png";
import sec1Img2 from "../../assets/LandingPage/images/Rectangle 8.png";
import sec1Img3 from "../../assets/LandingPage/images/Rectangle 9.png";
import magicPattern1 from "../../assets/LandingPage/images/MagicPattern.design (2).png";
import magicPattern2 from "../../assets/LandingPage/images/MagicPattern.design (1).png";
import magicPattern3 from "../../assets/LandingPage/images/MagicPattern.design (3).png";

const Landing = () => {
  return (
    <div className="flex flex-col relative bg-background overflow-x-hidden -z-10">
      <section className="flex flex-col h-screen w-screen">
        <video
          src={video}
          className="absolute inset-0 h-screen w-screen object-cover opacity-80"
          autoPlay
          loop
          muted
          preload="auto"
          poster="poster.jpg"
        >
          <h1 className=" text-greyText">hello</h1>
        </video>
        <div className="relative z-10">
          <nav className="flex mt-[33px] ml-auto mr-auto rounded-2xl  items-center justify-around h-20 w-[1400px] bg-backgroundPurple bg-opacity-60">
            <div className="flex">
              <img src={logo} alt="" />
              <h2 className="ml-[32px] text-2xl font-semibold">KLUBJAM</h2>
            </div>
            <div className="flex justify-evenly w-[510px] text-lg text-greyText gap-6 font-medium">
              <a href="">Workspace</a>
              <a href="">Community</a>
              <a href="">Playlists</a>
              <a href="">JukeBox</a>
            </div>
            <div className="flex text-sm text-center justify-center items-center">
              <button className=" bg-primary w-[94px] h-[38px] overflow-hidden rounded-[10px] font-medium">
                SIGN IN
              </button>
              <button className="w-[154px] h-[38px] ml-[18px] overflow-hidden rounded-[10px] text-primary font-medium border-solid border-2">
                SIGN UP - it's free!
              </button>
            </div>
          </nav>
          <div className="flex flex-col text-center items-center mt-[100px] gap-4 ">
            <h1 className=" text-6xl font-black overflow-hidden">
              Step into the Beat
            </h1>
            <h2 className=" text-2xl font-semibold">
              Where Music Comes Alive, Creativity Knows no Bounds <br />
              and Every Note Tells a Story!
            </h2>
            <button className=" text-xl font-bold bg-primary w-fit pb-[10px] pr-[78px] pt-[10px] pl-[78px] mt-[46px] mb-[15px] rounded-[10px] shadow-drop">
              Join now!
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full relative">
        <div className=" mt-[202px] flex flex-col text-center relative">
          <h1 className="  font-black text-[45px] ">
            Produce & Collab Together
          </h1>
          <img src={line} className="mb-[19px] mt-[9px] shadow-drop" alt="" />
          <p className="text-[20px]  font-semibold">
            Have the ability to create and collaborate on
            <br /> music projects, whether it's a single or
            <br /> multiple musicians on one project.
          </p>
        </div>
        <div className="flex mt-[327px] mr-[100px] w-[680px] h-[600px] relative z-0">
          <img
            src={sec1Img2}
            alt=""
            className=" ml-[] w-[393px] h-[393px] absolute top-5 left-[20%] z-20"
          />
          <img
            src={sec1Img1}
            alt=""
            className=" ml-[] mt-[] w-[331px] h-[362px] absolute bottom-0 left-0 z-30"
          />
          <img
            src={sec1Img3}
            alt=""
            className=" ml-[] mt-[] w-[331px] h-[331px] absolute top-[30%] bottom-0 right-0 z-10"
          />
        </div>
      </section>
      <img
        src={magicPattern1}
        alt=""
        className="z-0 relative top-[50%] left-[] transform[-translate-x-1/2 -translate-y-1/2] h-full"
      />

      <section>
        <div className=" mt-[202px] flex flex-col text-center">
          <h1 className="  font-black text-[45px] ">Join the KLUB</h1>
          <img src={line} className="mb-[19px] mt-[9px] m shadow-drop" alt="" />
          <p className="text-[20px]  font-semibold">
            Connect now and join a community where you
            <br /> can interact with others, share your music,
            <br /> and engage with like-minded individuals.
          </p>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Landing;
