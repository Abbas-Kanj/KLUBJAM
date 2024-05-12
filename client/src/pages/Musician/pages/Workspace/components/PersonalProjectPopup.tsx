import star from "../../../../assets/Workspace/icons/star.svg";

interface ProjectProps {
  setOpenPersonalProjectPopup: (open: boolean) => void;
  project: any;
}

const PersonalProjectPopup: React.FC<ProjectProps> = ({
  setOpenPersonalProjectPopup,
  project,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background">
        <div className="flex justify-between">
          <p
            className="text-red-500 font-bold cursor-pointer ml-[20px] mt-[10px]"
            onClick={() => setOpenPersonalProjectPopup(false)}
          >
            X
          </p>
          <p className="w-[146px] rounded-xl text-primary bg-background font-bold text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center cursor-pointer hover:opacity-50 mt-[10px] mr-[20px]">
            Produce
          </p>
        </div>
        <div className="border border-solid border-greyText w-full mx-auto mt-[10px]"></div>
        <div className="flex items-center mx-[100px] my-[30px]  gap-[56px]">
          <div className="flex w-full justify-between items-center">
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
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectPopup;
