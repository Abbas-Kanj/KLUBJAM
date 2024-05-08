import React, { useState } from "react";

interface UpdateMusicianProps {
  setOpenCreateProjectPopup: (open: boolean) => void;
}

const CreateProjectPopup: React.FC<UpdateMusicianProps> = ({
  setOpenCreateProjectPopup,
}) => {
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
          <p className="w-[146px] rounded-xl text-primary bg-background font-medium text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center cursor-pointer hover:opacity-50 mt-[10px] mr-[20px]">
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
            {projectType === "Group" && (
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
        </div>
      </form>
    </div>
  );
};

export default CreateProjectPopup;
