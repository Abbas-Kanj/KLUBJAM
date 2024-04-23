import video from "../../assets/LandingPage/full-vid.mp4";
import logo from "../../assets/LandingPage/images/image 4.svg";
import line from "../../assets/LandingPage/Line 1.png";
import sec1Img1 from "../../assets/LandingPage/images/Rectangle 7.png";
import sec1Img2 from "../../assets/LandingPage/images/Rectangle 8.png";
import sec1img3 from "../../assets/LandingPage/images/Rectangle 9.png";

const Landing = () => {
  return (
    <div className="flex flex-col relative bg-background overflow-x-hidden">
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
      <section className="flex flex-col">
        <div className=" mt-[202px] flex flex-col w-fit">
          <h1 className=" ml-[141px] font-black text-[45px] w-fit">
            Produce & Collab Together
          </h1>
          <img
            src={line}
            className="ml-[127px] mt-[9px] mb-[19px] w-fit shadow-drop"
            alt=""
          />
          <div className="flex text-center ml-[224px] w-fit">
            <p className="text-[20px] font-semibold">
              Have the ability to create and collaborate on
              <br /> music projects, whether it's a single or
              <br /> multiple musicians on one project.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src={sec1Img2}
            alt=""
            className=" ml-[793px] mt-[5px] w-[393px] h-[393px] z-10"
          />
          <img src={sec1Img1} alt="" className="w-[331px] h-[362px] z-20" />
          <img src="" alt="" />
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Landing;
