import Header from "./components/Header";
import AnalyticsCards from "./components/AnalyticsCards";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useAppDispatch } from "../../../../app/hooks";
import { fetchAllUsers } from "../../../../redux/users/usersSlice";
import { fetchAllTracks } from "../../../../redux/tracks/tracksSlice";

const Analytics = () => {
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchAllUsers());
      dispatch(fetchAllTracks());
    }
  }, [auth_token, dispatch]);
  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark">
      <Header></Header>
      <AnalyticsCards></AnalyticsCards>
    </div>
  );
};

export default Analytics;
