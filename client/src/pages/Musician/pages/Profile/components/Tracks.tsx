import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import { fetchUserTracks } from "../../../../../redux/user/userSlice";

const Tracks = () => {
  const userTracks = useAppSelector((state) => state.user.tracks);
  const user = useAppSelector((state) => state.user.info);

  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchUserTracks());
    }
  }, [auth_token, dispatch]);

  return (
    <div className="mb-[40px] w-[1133px] flex mx-auto flex-wrap gap-[22px] items-center">
      {userTracks?.map((track, i) => (
        <div
          key={i}
          className="w-[130px] h-[162px] flex flex-col justify-start"
        >
          <img src={track.track_image} alt="" className="w-[130px] h-[130px]" />
          <h2 className="font-medium text-[12px] mt-[6px]">
            {track.track_name}
          </h2>
          <h2 className="font-medium text-[12px] text-greyText">
            {user?.username}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Tracks;
