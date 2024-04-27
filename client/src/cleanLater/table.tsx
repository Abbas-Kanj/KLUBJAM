import React from "react";

const table = () => {
  return (
    <div>
      <table className="flex flex-col w-[1000px] h-auto bg-opacity-70">
        <thead className="flex gap-[120px] items-center h-[42px] bg-inputBox rounded">
          <div className="flex justify-between items-center  w-[520px]">
            <th>ID</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Status</th>
            <th>Register Date</th>
          </div>
          <div className="flex gap-[50px] max-w-[254px]">
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </div>
        </thead>
        <tbody className="mt-[14px] rounded h-[42px] gap-[110px] flex items-center">
          <div className="flex justify-between items-center  w-[520px]">
            <td>1</td>
            <td>Jhon Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Active</td>
            <td>21/3/2024</td>
          </div>
          <div className="flex gap-[20px] max-w-[254px]">
            <button className="bg-tableUpdateBtn">Update</button>
            <button className="bg-tableSuspendBtn">Suspend</button>
            <button className="bg-tableDeleteBtn">Ban</button>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default table;
