import star from "../../../../assets/Workspace/icons/star.svg";
import circle from "../../../../assets/Workspace/icons//circle.svg";

interface ProjectProps {
  setOpenGroupProjectPopup: (open: boolean) => void;
  project: any;
}

const GroupProjectPopup: React.FC<ProjectProps> = ({
  setOpenGroupProjectPopup,
  project,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background">
        <div className="flex justify-between">
          <p
            className="text-red-500 font-bold cursor-pointer ml-[20px] mt-[10px]"
            onClick={() => setOpenGroupProjectPopup(false)}
          >
            X
          </p>
          <p className="w-[146px] rounded-xl text-primary bg-background font-bold text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center cursor-pointer hover:opacity-50 mt-[10px] mr-[20px]">
            Produce
          </p>
        </div>
        <div className="border border-solid border-greyText w-full mx-auto mt-[10px]"></div>
        <div className="flex flex-col items-center mx-[100px] my-[30px]  gap-[56px]">
          <div className="flex flex-col mt-[18px]">
            <div className="flex justify-between items-center">
              <div className=" text-center items-center flex gap-[14px]">
                <h1 className="font-bold text-[20px] text-primary">
                  {project.project_name}
                </h1>
                <h2 className=" w-[58px] h-[24px] font-bold text-[10px] border-[2px] border-solid border-greyText rounded-lg p-[4px] text-greyText cursor-pointer hover:text-primary hover:border-primary">
                  {project.privacy}
                </h2>
              </div>
              <div className="flex justify-center items-center w-[58px] h-[24px] border-[2px] border-solid border-greyText rounded-lg gap-[6px]  cursor-pointer hover:border-primary">
                <img src={star} alt="" className="w-[12px] h-[12px]" />
                <h2 className="font-bold text-[14px]  text-greyText  hover:text-primary hover:border-primary">
                  star
                </h2>
              </div>
            </div>
            <div className="flex items-center mt-[9px] mb-[9px]">
              <img src={circle} alt="" className="mr-[6px]" />
              <h2 className="mr-[28px] font-bold text-[12px] text-greyText">
                {!project.genre ? "No Genre" : project.genre}
              </h2>
              <h2 className="text-[13px] text-greyText">
                {`Updated ${new Date(project.updatedAt).getHours()} hours ago`}
              </h2>
            </div>
            <p className="text-[14px] text-greyText">{project.description}</p>
            <div className="border border-solid border-greyText w-[776px] mt-[15px]"></div>
            <div className="flex justify-between mt-[20px]">
              <div className="flex items-center gap-5">
                <h2 className="font-bold text-[14px] text-greyText">
                  Track name:{" "}
                </h2>
                <p className="text-[12px] text-greyText">
                  {!project.track_name ? "no name" : project.track_name}
                </p>
              </div>

              <img
                src={
                  !project.track_image
                    ? "no Image"
                    : `http://127.0.0.1:3000${project.track_image}`
                }
              />
            </div>
            <div className="flex items-center mt-[20px] gap-5">
              <h2 className="font-bold text-[14px] text-greyText ">
                Track Duration:{" "}
              </h2>
              <p className="text-[12px] text-greyText">
                {!project.duration ? "no duration yet..." : project.duration}
              </p>
            </div>
            <div className="flex items-center mt-[20px] gap-5">
              <h2 className="font-bold text-[14px] text-greyText ">
                Audio Slice:{" "}
              </h2>
              <p className="text-[12px] text-greyText">
                {!project.audio_url ? "Under production" : project.audio_url}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupProjectPopup;
