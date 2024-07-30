import React, { useState } from "react";
import Cookies from "js-cookie";
import { sendRequest } from "../../../../../core/remote/request";
import { useAppSelector } from "../../../../../app/hooks";
import axios from "axios";

interface UpdateMusicianProps {
  setOpenCreateProjectPopup: (open: boolean) => void;
}

const CreateProjectPopup: React.FC<UpdateMusicianProps> = ({
  setOpenCreateProjectPopup,
}) => {
  const authToken = Cookies.get("auth_token");
  const user = useAppSelector((state) => state.user.info);
  const fireBaseToken = useAppSelector((state) => state.user.fireBaseToken);

  const [error, setError] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectPrivacy, setProjectPrivacy] = useState("Private");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectType, setProjectType] = useState("Personal");
  const [collaboratorInput, setCollaboratorInput] = useState("");
  const [collaborators, setCollaborators] = useState<string[]>([]);

  const addCollaborator = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (collaboratorInput.trim() !== "") {
      setCollaborators([...collaborators, collaboratorInput]);
      setCollaboratorInput("");
    }
  };

  const validatePostForm = () => {
    if (projectName === "" || projectDescription === "") {
      setError("Please fill empty fields");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const createProject = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (authToken) {
      if (validatePostForm()) {
        const data = {
          project_name: projectName,
          type: projectType,
          description: projectDescription,
          privacy: projectPrivacy,
          collaborators: collaborators,
        };
        try {
          const res = await sendRequest("POST", `/projects/${user?.id}`, data);
          if (res.status == 201) {
            setOpenCreateProjectPopup(false);

            if (fireBaseToken) {
              const authorizationKey =
                "AAAA8A58VNo:APA91bEIS47JEm1C4WEpp0enmRYJRiFAcO_ASkghIroegSe2XZwXneQpsNvufFos6LXOCdeuNbNnGqi0QmG3HvY5CckmKxxSrE-SfNs6xVisn8fsWnGGYXwPwfdClSSkRuQXt_CKCHS2";

              const sentData = {
                to: fireBaseToken,
                notification: {
                  body: "Invitation sent!",
                  title: "title",
                  subtitle: "subtitle",
                },
              };
              try {
                const res = await axios.request({
                  method: "POST",
                  url: "https://fcm.googleapis.com/fcm/send",
                  data: sentData,
                  headers: {
                    Authorization: `Bearer ${authorizationKey}`,
                  },
                });
                if (res.status === 201) {
                  console.log("success");
                }
              } catch {
                console.log("error");
              }
            }
          }
        } catch (error: any) {
          console.log(error.message);
          setError(error.message);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form
        className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background"
        onSubmit={addCollaborator}
      >
        <div className="flex justify-between">
          <p
            className="text-red-500 font-bold cursor-pointer ml-[20px] mt-[10px]"
            onClick={() => setOpenCreateProjectPopup(false)}
          >
            X
          </p>
          <p
            className="w-[146px] rounded-xl text-primary bg-background font-medium text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center cursor-pointer hover:opacity-50 mt-[10px] mr-[20px]"
            onClick={createProject}
          >
            Create Project
          </p>
        </div>
        <div className="flex justify-center mt-[70px] gap-[56px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Project Name
              </label>
              <input
                type="text"
                className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <label
              htmlFor=""
              className="font-semibold text-[14px] text-greyText"
            >
              Description
            </label>
            <textarea
              name=""
              id=""
              className=" bg-inputBox rounded-lg w-[347px] h-[165px] p-2 focus:outline-none"
              onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Privacy
              </label>
              <select
                name=""
                id=""
                className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                onChange={(e) => setProjectPrivacy(e.target.value)}
              >
                <option>Private</option>
                <option>Public</option>
              </select>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Project Type
              </label>
              <select
                name=""
                id=""
                className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value="Personal">Personal</option>
                <option value="Group">Group</option>
              </select>
            </div>
            {projectType == "Group" && (
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText"
                >
                  Select Collaborators
                </label>
                <div className="flex justify-between w-[347px] gap-3">
                  <input
                    type="text"
                    value={collaboratorInput}
                    onChange={(e) => setCollaboratorInput(e.target.value)}
                    className="bg-inputBox flex-grow h-[37px] rounded focus:outline-none p-1"
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:opacity-75 text-[14px] px-[6px] font-bold rounded"
                  >
                    Add Collaborator
                  </button>
                </div>

                <ul className="bg-inputBox p-2 rounded ">
                  {collaborators.map((collaborator, i) => (
                    <li className="text-primary" key={i}>
                      {collaborator}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {error && <small className="text-red">{error}</small>}
        </div>
      </form>
    </div>
  );
};

export default CreateProjectPopup;
