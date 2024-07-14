import { useState } from "react";
import SignIn from "./components/SigninPopup";
import Signup from "./components/SignupPopup";
import Carousel from "./components/Carousel";
import WorkspaceSection from "./components/WorkspaceSection";
import CommunitySection from "./components/CommunitySection";
import DiscoverMusicSection from "./components/DiscoverMusicSection";
import AiSection from "./components/AiSection";
import HeroSection from "./components/HeroSection";
import ScrollButton from "./components/ScrollButton";

const LandingPage = () => {
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
      <ScrollButton />
      <HeroSection
        setOpenSigninPopup={setOpenSigninPopup}
        setOpenSignupPopup={setOpenSignupPopup}
      />
      <WorkspaceSection />
      <CommunitySection />
      <DiscoverMusicSection />
      <AiSection />
      <Carousel />
    </div>
  );
};

export default LandingPage;
