import star from "../../../../assets/Workspace/icons/star.svg";
import circle from "../../../../assets/Workspace/icons//circle.svg";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { fetchUserGroupProjects } from "../../../../../redux/user/userSlice";
import Cookies from "universal-cookie";
import GroupProjectPopup from "./GroupProjectPopup";

const GroupProjects = () => {
  const cookies = new Cookies();
  const [openGroupProjectPopup, setOpenGroupProjectPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();
  const groupProjects = useAppSelector((state) => state.user.projects.group);

  const openProjectPopup = (project: any) => {
    setSelectedProject(project);
    setOpenGroupProjectPopup(true);
  };

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchUserGroupProjects());
    }
  }, [auth_token, dispatch]);
  return (
    <div className="flex flex-col justify-center items-center mb-[50px]">
      {openGroupProjectPopup && (
        <GroupProjectPopup
          project={selectedProject}
          setOpenGroupProjectPopup={setOpenGroupProjectPopup}
        ></GroupProjectPopup>
      )}
      <div className="border border-solid border-greyText w-[776px] mt-[15px]"></div>
      {groupProjects
        ?.slice()
        .reverse()
        .map((project, i) => (
          <div
            key={i}
            className="flex flex-col mt-[18px] cursor-pointer transition duration-300 ease-in-out hover:opacity-50"
            onClick={() => openProjectPopup(project)}
          >
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
          </div>
        ))}
    </div>
  );
};

export default GroupProjects;
