import { useState } from "react";
import UpdateModPopup from "./UpdateModPopup";
import AddModPopup from "./AddModPopup";
import { useAppSelector } from "../../../../../app/hooks";

const Moderatortable = () => {
  const [openUpdateModPopup, setopenUpdateModPopup] = useState(false);
  const [openAddModPopup, setopenAddModPopup] = useState(false);
  const users = useAppSelector((state) => state.users.user);

  return (
    <>
      <button
        className="w-[154px] h-[38px] rounded-[10px] text-white bg-primary border-primary font-bold border-2 ml-[1100px] mt-[20px]"
        onClick={() => {
          setopenAddModPopup(true);
        }}
      >
        Add Moderator
      </button>
      <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
        {openUpdateModPopup && (
          <UpdateModPopup
            setopenUpdateModPopup={setopenUpdateModPopup}
          ></UpdateModPopup>
        )}
        {openAddModPopup && (
          <AddModPopup setopenAddModPopup={setopenAddModPopup}></AddModPopup>
        )}

        <table className="w-[1140px] mx-auto h-auto">
          <thead className="bg-inputBox border-b-2 border-gray-200">
            <tr>
              <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                ID
              </th>
              <th className="p-3  text-sm font-semibold tracking-wide text-left">
                Fullname
              </th>
              <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
              <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                Register Date
              </th>
              <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className=" p-3 text-sm font-semibold tracking-wide text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            {users
              ?.filter((user) => user.role_id == 2)
              .map((user, i) => (
                <tr key={i} className="bg-tableRow">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href="#"
                      className="font-bold text-white hover:underline"
                    >
                      {user.id}
                    </a>
                  </td>
                  <td className="p-3 text-sm text-white whitespace-nowrap">
                    {!user.fullname ? "No name" : user.fullname}
                  </td>
                  <td className="p-3 text-sm text-white whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="p-3 text-sm text-white whitespace-nowrap">
                    <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-tableUpdateBtn bg-gray-500 hover:bg-opacity-30 rounded-md ">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-white whitespace-nowrap">
                    <span className="p-1.5 text-xs font-bold uppercase tracking-wider text-tableUpdateBtn  rounded-lg ">
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-sm text-white whitespace-nowrap flex justify-evenly">
                    <span
                      className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableUpdateBtn text-black rounded-md cursor-pointer hover:bg-opacity-50"
                      onClick={() => {
                        setopenUpdateModPopup(true);
                      }}
                    >
                      Update
                    </span>
                    <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableDeleteBtn text-black rounded-md  cursor-pointer hover:bg-opacity-30">
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Moderatortable;
