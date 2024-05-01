import postslogo from "../../../assets/icons/grey/Group 128.svg";
import Musicians from "../../../assets/icons/grey/Vector (1).svg";
import Moderators from "../../../assets/icons/grey/Vector (2).svg";
import Tracks from "../../../assets/icons/grey/Group.svg";

const AnalyticsCards = () => {
  return (
    <div className="mt-[26px] mb-[30px] mx-auto w-[1133px] h-full flex flex-wrap justify-start gap-[22px]">
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-backgroundPurple bg-opacity-60 p-3 rounded-full">
          <img src={postslogo} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Posts Created
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-tableBackground p-3 rounded-full">
          <img src={Musicians} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Musicians Registered
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-tableBackground p-3 rounded-full">
          <img src={Moderators} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Moderators Invited
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-tableBackground p-3 rounded-full">
          <img src={Tracks} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Tracks Produced
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-tableBackground p-3 rounded-full">
          <img src={postslogo} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Revenue Generated
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-tableBackground p-3 rounded-full">
          <img src={postslogo} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Projects Created
        </h2>
      </div>
      <div className="p-[20px] w-[350px] h-[210px] bg-background flex flex-col items-center justify-around rounded-xl">
        <div className="bg-tableBackground p-3 rounded-full">
          <img src={postslogo} alt="" className="w-[30px] h-[30px]" />
        </div>

        <h2 className=" font-bold text-[25px] text-tableRow mt-[6px]">15</h2>
        <h2 className=" font-medium text-[20px] text-tableRow">
          Projects Created
        </h2>
      </div>
    </div>
  );
};

export default AnalyticsCards;
