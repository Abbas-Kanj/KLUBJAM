import { useState } from "react";
// import Logo from "../../assets/Sidebar/icons/logo.svg";
import logout from "../../assets/Sidebar/icons/logout.svg";
import AnalyticsLogo from "../assets/icons/grey/Vector.svg";
import AnalyticsLogoCyan from "../assets/icons/cyan/Vector.svg";
import Musicians from "../assets/icons/grey/Vector (1).svg";
import MusiciansCyan from "../assets/icons/cyan/Vector (1).svg";
import Moderators from "../assets/icons/grey/Vector (2).svg";
import ModeratorsCyan from "../assets/icons/cyan/Vector (2).svg";
import Tracks from "../assets/icons/grey/Group.svg";
import TracksCyan from "../assets/icons/cyan/Group.svg";
import Posts from "../assets/icons/grey/Group 128.svg";
import PostsCyan from "../assets/icons/cyan/Group 128.svg";
import CoinRequests from "../assets/icons/grey/Vector (3).svg";
import CoinRequestsCyan from "../assets/icons/cyan/Vector (3).svg";
import Reports from "../assets/icons/grey/Vector (4).svg";
import ReportsCyan from "../assets/icons/cyan/Vector (4).svg";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isAnalyticsHovered, setisAnalyticsHovered] = useState(false);
  const [isMusiciansHovered, setisMusiciansHovered] = useState(false);
  const [isModeratorsHovered, setisModeratorsHovered] = useState(false);
  const [isTracksHovered, setisTracksHovered] = useState(false);
  const [isPostsHovered, setisPostsHovered] = useState(false);
  const [isCoinRequestsHovered, setisCoinRequestsHovered] = useState(false);
  const [isReportsHovered, setisReportsHovered] = useState(false);

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("auth_token");
    navigate("/");
  };

  return (
    <div className="flex flex-col w-[257px] h-screen bg-background ">
      <div className="flex mt-[38px] ml-[14px] gap-[19px]">
        {/* <img src={Logo} alt="" /> */}
        <h1 className="font-semibold text-[22px]">KLUBJAM</h1>
      </div>
      <div>
        <div className="ml-[24px] mt-[72px] mb-[120px] flex flex-col gap-[20px] h-[400px]">
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisAnalyticsHovered(true)}
              onMouseLeave={() => setisAnalyticsHovered(false)}
              onClick={() => navigate("../Analytics")}
            >
              <img
                src={isAnalyticsHovered ? AnalyticsLogoCyan : AnalyticsLogo}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Analytics
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisMusiciansHovered(true)}
              onMouseLeave={() => setisMusiciansHovered(false)}
              onClick={() => navigate("../Musicians")}
            >
              <img
                src={isMusiciansHovered ? MusiciansCyan : Musicians}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Musicians
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisModeratorsHovered(true)}
              onMouseLeave={() => setisModeratorsHovered(false)}
              onClick={() => navigate("../Moderators")}
            >
              <img
                src={isModeratorsHovered ? ModeratorsCyan : Moderators}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Moderators
              </h2>
            </div>
          </div>
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
              onMouseEnter={() => setisPostsHovered(true)}
              onMouseLeave={() => setisPostsHovered(false)}
              onClick={() => navigate("../Posts")}
            >
              <img
                src={isPostsHovered ? PostsCyan : Posts}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Posts
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisCoinRequestsHovered(true)}
              onMouseLeave={() => setisCoinRequestsHovered(false)}
              onClick={() => navigate("../CoinRequests")}
            >
              <img
                src={isCoinRequestsHovered ? CoinRequestsCyan : CoinRequests}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Coin Requests
              </h2>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div
              className="flex gap-[16px] items-center group-hover:bg-opacity-50 transition duration-300"
              onMouseEnter={() => setisReportsHovered(true)}
              onMouseLeave={() => setisReportsHovered(false)}
              onClick={() => navigate("../Reports")}
            >
              <img
                src={isReportsHovered ? ReportsCyan : Reports}
                alt=""
                className="w-6 h-6 group-hover:filter"
              />
              <h2 className="font-semibold text-[16px] text-greyText group-hover:text-primary">
                Reports
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

export default AdminSidebar;
