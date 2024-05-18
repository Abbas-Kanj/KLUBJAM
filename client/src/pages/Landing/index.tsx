import video from "../assets/LandingPage/wide-video.mp4";
import logo from "../assets/LandingPage/images/image 4.svg";
import line from "../assets/LandingPage/Line 1.png";
import sec1Img1 from "../assets/LandingPage/images/Rectangle 7.png";
import sec1Img2 from "../assets/LandingPage/images/Rectangle 8.png";
import sec1Img3 from "../assets/LandingPage/images/Rectangle 9.png";
import magicPattern1 from "../assets/LandingPage/images/MagicPattern.design (2).png";
import magicPattern2 from "../assets/LandingPage/images/MagicPattern.design (1).png";
import magicPattern3 from "../assets/LandingPage/images/MagicPattern.design (3).png";
import sec2Img1 from "../assets/LandingPage/images/Rectangle 11.png";
import sec2Img2 from "../assets/LandingPage/images/Rectangle 12.png";
import sec2Img3 from "../assets/LandingPage/images/Rectangle 13.png";
import sec3Img1 from "../assets/LandingPage/images/Rectangle 25.png";
import sec3Img2 from "../assets/LandingPage/images/Rectangle 26.png";
import sec3Img3 from "../assets/LandingPage/images/Rectangle 27.png";
import sec3Img4 from "../assets/LandingPage/images/Rectangle 28.png";
import sec4Img1 from "../assets/LandingPage/images/Rectangle 29.png";
import sec4Img2 from "../assets/LandingPage/images/Rectangle 30.png";
import sec4Img3 from "../assets/LandingPage/images/Rectangle 31.png";
import sec4Img4 from "../assets/LandingPage/images/Rectangle 32.png";
import sec4Img5 from "../assets/LandingPage/images/Rectangle 33.png";
import sec4Img6 from "../assets/LandingPage/images/Rectangle 34.png";
import sec4Img7 from "../assets/LandingPage/images/Rectangle 35.png";
import reviewerImg from "../assets/LandingPage/images/Ellipse 4.svg";
import { useState } from "react";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import Carousel from "./components/Carousel";

//////////////////////////////////////////////////////////////////////////

const Landing = () => {
  const [openSigninPopup, setOpenSigninPopup] = useState(false);
  const [openSignupPopup, setOpenSignupPopup] = useState(false);

  return (
    <div className="flex flex-col relative bg-background overflow-x-hidden overflow-y-hidden overflow-scroll z-0">
      {openSigninPopup && (
        <SignIn
          setOpenSigninPopup={setOpenSigninPopup}
          setOpenSignupPopup={setOpenSignupPopup}
        ></SignIn>
      )}
      {openSignupPopup && (
        <Signup
          setOpenSignupPopup={setOpenSignupPopup}
          setOpenSigninPopup={setOpenSigninPopup}
        ></Signup>
      )}

      <section className="flex flex-col h-screen w-screen">
        <video
          src={video}
          className="absolute inset-0 h-screen w-screen object-cover opacity-80"
          autoPlay
          muted
          loop
          preload="auto"
          poster={magicPattern3}
        >
          <h1 className=" text-greyText">hello</h1>
        </video>
        <div className="relative z-10">
          <nav className="flex mt-[33px] ml-auto mr-auto rounded-2xl  items-center justify-around h-20 w-[1400px] bg-backgroundPurple bg-opacity-65">
            <div className="flex">
              <img src={logo} alt="" />
              <h2 className="ml-[32px] text-2xl font-semibold">KLUBJAM</h2>
            </div>
            <div className="flex justify-evenly w-[510px] text-lg gap-6 font-medium">
              <a href="">Workspace</a>
              <a href="">Community</a>
              <a href="">Playlists</a>
              <a href="">Jambox</a>
            </div>
            <div className="flex text-sm text-center justify-center items-center">
              <button
                className=" bg-primary w-[94px] h-[38px] overflow-hidden rounded-[10px] font-medium"
                onClick={() => {
                  setOpenSigninPopup(true);
                }}
              >
                SIGN IN
              </button>
              <button
                className="w-[154px] h-[38px] ml-[18px] overflow-hidden rounded-[10px] text-primary font-medium border-solid border-2"
                onClick={() => {
                  setOpenSignupPopup(true);
                }}
              >
                SIGN UP - it's free!
              </button>
            </div>
          </nav>
          <div className="flex flex-col text-center items-center mt-[160px] gap-4 ">
            <h1 className=" text-6xl font-black overflow-hidden">
              Step into the Beat
            </h1>
            <h2 className=" text-2xl font-semibold">
              Where Music Comes Alive, Creativity Knows no Bounds <br />
              and Every Note Tells a Story!
            </h2>
            <button
              className=" text-xl font-bold bg-primary w-fit pb-[10px] pr-[78px] pt-[10px] pl-[78px] mt-[46px] mb-[15px] rounded-[10px] shadow-drop"
              onClick={() => {
                setOpenSigninPopup(true);
              }}
            >
              Join now!
            </button>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full relative">
        <div className=" mt-[202px] flex flex-col text-center relative z-10">
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
        <div className="flex mt-[327px] mr-[100px] w-[680px] h-[600px] relative z-1">
          <img
            src={sec1Img2}
            alt=""
            className=" ml-[] absolute top-5 left-[20%] z-30"
          />
          <img
            src={sec1Img1}
            alt=""
            className=" ml-[] mt-[]  absolute bottom-0 left-0 z-40"
          />
          <img
            src={sec1Img3}
            alt=""
            className=" ml-[] mt-[]  absolute top-[30%] bottom-0 right-0 z-20"
          />
        </div>
      </section>
      <section className="flex flex-col w-full z-10">
        <img
          src={magicPattern1}
          alt=""
          className="absolute object-cover w-screen h-auto bottom-[55%] left-0 z-10"
        />
        <div className=" mt-[202px] ml-[828px] flex flex-col text-center relative z-20 w-fit">
          <h1 className="  font-black text-[45px] ">Join the KLUB</h1>
          <img src={line} className="mb-[19px] mt-[9px] m shadow-drop" alt="" />
          <p className="text-[20px]  font-semibold">
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
            <h2 className="text-[25px] font-bold">
              Engage with the like minded
            </h2>
            <img src={sec2Img3} alt="" className="mt-[27px]" />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full ">
        <img
          src={magicPattern3}
          alt=""
          className="absolute object-cover w-screen h-auto top-[50%] left-0 z-0"
        />
        <div className=" mt-[] ml-[185px] flex flex-col text-center relative z-20 w-fit">
          <h1 className="  font-black text-[45px] ">Discover New Music</h1>
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
      <section className="flex flex-col w-full  overflow-hidden z-10">
        <div className=" mt-[202px] ml-[828px] flex flex-col text-center relative w-fit z-20">
          <h1 className="  font-black text-[45px] ">Create Music with AI</h1>
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
      <section className="flex flex-col w-full h-screen  overflow-hidden z-20">
        <Carousel />
      </section>
    </div>
  );
};

export default Landing;
