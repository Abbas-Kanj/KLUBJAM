import imgIcon from "../../../assets/icons/Vector (1).svg";
import playerIcon from "../../../assets/icons/Vector (1).svg";

const TracksTable = () => {
  return (
    <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
      <table className="w-[1100px] mx-auto h-auto">
        <thead className="bg-inputBox border-b-2 border-gray-200">
          <tr>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3  text-sm font-semibold tracking-wide text-left">
              Producer
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Track Title
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Explicit
            </th>

            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Duration
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Track Image
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Play Track
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          <tr className="bg-tableRow">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" className="font-bold text-black hover:underline">
                1
              </a>
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              John-Dx
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">Birds</td>
            <td className="p-3 text-sm text-black whitespace-nowrap">True</td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              Duration
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap cursor-pointer">
              <img src={imgIcon} alt="" />
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap cursor-pointer">
              <img src={playerIcon} alt="" />
            </td>

            <td className="p-3 text-sm text-black whitespace-nowrap">
              <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableUpdateBtn text-black rounded-lg hover:bg-opacity-30 cursor-pointer">
                Update
              </span>
            </td>

            <td className="p-3 text-sm text-black whitespace-nowrap ">
              <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableDeleteBtn text-black rounded-lg  cursor-pointer hover:bg-opacity-30 ">
                Ban
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TracksTable;
