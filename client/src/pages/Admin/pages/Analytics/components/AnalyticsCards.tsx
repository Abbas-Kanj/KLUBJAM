import postslogo from "../../../assets/icons/analytics/Group 128.svg";
import Musicians from "../../../assets/icons/analytics/Vector.svg";
import Moderators from "../../../assets/icons/analytics/Vector (1).svg";
import Tracks from "../../../assets/icons/analytics/Group.svg";
import revenue from "../../../assets/icons/analytics/gg_dollar.svg";
import projectslogo from "../../../assets/icons/analytics/Vector (2).svg";
import { useAppSelector } from "../../../../../app/hooks";

const AnalyticsCards = () => {
  const posts = useAppSelector((state) => state.post.posts);
  const users = useAppSelector((state) => state.users.user);
  const tracks = useAppSelector((state) => state.track.tracks);
  const projects = useAppSelector((state) => state.projects.project);

  return (
    <div className="mt-[26px] mb-[30px] mx-auto w-[1133px] h-full flex flex-wrap justify-start gap-[22px]">
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple bg-opacity-60 p-3 rounded-full">
          <img src={postslogo} alt="" className="w-[30px] h-[30px]" />
        </div>
        <h2 className=" font-bold text-[25px] text-white mt-[6px]">
          {posts?.length}
        </h2>
        <h2 className=" font-medium text-[20px] text-white">Posts Created</h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple p-3 rounded-full">
          <img src={Musicians} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-white mt-[6px]">
          {users?.filter((user) => user.role_id == 3).length}
        </h2>
        <h2 className=" font-medium text-[20px] text-white">
          Musicians Registered
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple p-3 rounded-full">
          <img src={Moderators} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-white mt-[6px]">
          {" "}
          {users?.filter((user) => user.role_id == 2).length}
        </h2>
        <h2 className=" font-medium text-[20px] text-white">
          Active Moderators
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple p-3 rounded-full">
          <img src={Tracks} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-white mt-[6px]">
          {" "}
          {tracks?.length}
        </h2>
        <h2 className=" font-medium text-[20px] text-white">Tracks Produced</h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple p-3 rounded-full">
          <img src={revenue} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-white mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-white">
          Revenue Generated
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple p-3 rounded-full">
          <img src={projectslogo} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-white mt-[6px]">
          {" "}
          {projects?.length}
        </h2>
        <h2 className=" font-medium text-[20px] text-white">
          Projects Created
        </h2>
      </div>
    </div>
  );
};

export default AnalyticsCards;
