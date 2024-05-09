import Header from "./components/Header";
import AnalyticsCards from "./components/AnalyticsCards";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useAppDispatch } from "../../../../app/hooks";
import { fetchAllUsers } from "../../../../redux/users/usersSlice";
import { fetchAllTracks } from "../../../../redux/tracks/tracksSlice";
import { fetchAllPosts } from "../../../../redux/posts/postsSlice";
import { fetchAllProjects } from "../../../../redux/projects/projectsSlice";
import { fetchAllCoinRequests } from "../../../../redux/coin_requests/coinRequestsSlice";

const Analytics = () => {
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchAllUsers());
      dispatch(fetchAllTracks());
      dispatch(fetchAllPosts());
      dispatch(fetchAllProjects());
      dispatch(fetchAllCoinRequests());
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
