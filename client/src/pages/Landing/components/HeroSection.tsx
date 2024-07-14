import LandingNavbar from "./LandingNavbar";
import video from "/wide-video.mp4";
import magicPattern3 from "/images/MagicPattern.design (3).png";

interface HeroSectionNavbarProps {
  setOpenSigninPopup: (open: boolean) => void;
  setOpenSignupPopup: (open: boolean) => void;
}

const HeroSection: React.FC<HeroSectionNavbarProps> = ({
  setOpenSigninPopup,
  setOpenSignupPopup,
}) => {
  return (
    <section className="flex flex-col h-screen w-screen">
      <video
        src={video}
        className="absolute inset-0 h-screen w-screen object-cover opacity-80"
        autoPlay
        muted
        loop
        preload="auto"
        poster={magicPattern3}
      ></video>
      <div className="relative z-10">
        <LandingNavbar
          setOpenSigninPopup={setOpenSigninPopup}
          setOpenSignupPopup={setOpenSignupPopup}
        />
        <div className="flex flex-col text-center items-center mt-[160px] gap-4 ">
          <h1 className=" text-6xl font-black overflow-hidden">
            Step into the Beat
          </h1>
          <h2 className=" text-2xl font-semibold">
            Where Music Comes Alive, Creativity Knows no Bounds <br />
            and Every Note Tells a Story!
          </h2>
          <button
            className=" text-xl font-bold bg-primary w-fit pb-[10px] pr-[78px] pt-[10px] pl-[78px] mt-[46px] mb-[15px]
             rounded-[10px] shadow-drop opacity-90 hover:opacity-100 transition-all duration-150 ease-out md:ease-in"
            onClick={() => {
              setOpenSigninPopup(true);
            }}
          >
            Join now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
