import { useAppSelector } from "../../../../../app/hooks";
import imgIcon from "../../../assets/icons/Group 157.svg";
import playerIcon from "../../../assets/icons/Vector (1).svg";

const TracksTable = () => {
  const tracks = useAppSelector((state) => state.track.tracks);

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
            <th className=" p-3 text-sm font-semibold tracking-wide text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          {tracks?.map((track, i) => (
            <tr key={i} className="bg-tableRow">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="#" className="font-bold text-black hover:underline">
                  {track.id}
                </a>
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {track.user.username}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {track.track_name}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">True</td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {track.duration}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap cursor-pointer">
                <img src={imgIcon} alt="" />
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap cursor-pointer">
                <img src={playerIcon} alt="" />
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap flex justify-evenly">
                <span className="p-1.5 text-xs  uppercase tracking-wider bg-tableUpdateBtn font-bold text-black rounded-md cursor-pointer hover:bg-opacity-50">
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
  );
};

export default TracksTable;
