import { useState } from "react";
// import Logo from "../../assets/Sidebar/icons/logo.svg";
import logout from "../../assets/Sidebar/icons/logout.svg";
import Tracks from "../assets/icons/grey/Group.svg";
import TracksCyan from "../assets/icons/cyan/Group.svg";
import Comments from "../assets/icons/grey/Vector.svg";
import CommentsCyan from "../assets/icons/cyan/Vector.svg";
import Messages from "../assets/icons/grey/Vector (1).svg";
import MessagesCyan from "../assets/icons/cyan/Vector (1).svg";
import Report from "../assets/icons/grey/Vector (2).svg";
import ReportCyan from "../assets/icons/cyan/Vector (2).svg";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ReportPopup from "./ReportPopup";

const ModeratorSidebar = () => {
  const navigate = useNavigate();
  const [isTracksHovered, setisTracksHovered] = useState(false);
  const [isCommentsHovered, setisCommentsHovered] = useState(false);
  const [isMessagesHovered, setisMessagesHovered] = useState(false);
  const [isReportHovered, setisReportHovered] = useState(false);
  const [openReportPopup, setopenReportPopup] = useState(false);

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("auth_token");
    navigate("/");
  };

  return (
    <div className="flex flex-col w-[257px] h-screen bg-background">
      {openReportPopup && (
        <ReportPopup setopenReportPopup={setopenReportPopup}></ReportPopup>
      )}
      <div className="flex mt-[38px] ml-[14px] gap-[19px]">
        {/* <img src={Logo} alt="" /> */}
        <h1 className="font-semibold text-[22px]">KLUBJAM</h1>
      </div>
      <div>
        <div className="ml-[24px] mt-[72px] mb-[120px] flex flex-col gap-[20px] h-[400px]">
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisTracksHovered(true)}
              onMouseLeave={() => setisTracksHovered(false)}
              onClick={() => navigate("../Tracks")}
            >
              <img
                src={isTracksHovered ? TracksCyan : Tracks}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Tracks
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisCommentsHovered(true)}
              onMouseLeave={() => setisCommentsHovered(false)}
              onClick={() => navigate("../Comments")}
            >
              <img
                src={isCommentsHovered ? CommentsCyan : Comments}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Comments
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisMessagesHovered(true)}
              onMouseLeave={() => setisMessagesHovered(false)}
              onClick={() => navigate("../Messages")}
            >
              <img
                src={isMessagesHovered ? MessagesCyan : Messages}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Messages
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisReportHovered(true)}
              onMouseLeave={() => setisReportHovered(false)}
              onClick={() => {
                setopenReportPopup(true);
              }}
            >
              <img
                src={isReportHovered ? ReportCyan : Report}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Report
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="flex gap-[16px] ml-[24px] items-center cursor-pointer hover:opacity-50"
          onClick={handleLogout}
        >
          <img src={logout} alt="" />
          <h2 className="font-semibold text-[16px] text-[#FF0000]">Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default ModeratorSidebar;
