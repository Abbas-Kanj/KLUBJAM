import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { fetchAllTracks } from "../../../../../redux/tracks/tracksSlice";
import imgIcon from "../../../../Admin/assets/icons/Group 157.svg";
import playerIcon from "../../../../Admin/assets/icons/Vector (1).svg";
import { useEffect } from "react";
import Cookies from "universal-cookie";

const TracksTable = () => {
  const tracks = useAppSelector((state) => state.track.tracks);
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchAllTracks());
    }
  }, [auth_token, dispatch]);

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
                  Accept
                </span>
                <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableDeleteBtn text-black rounded-md  cursor-pointer hover:bg-opacity-30">
                  Reject
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
