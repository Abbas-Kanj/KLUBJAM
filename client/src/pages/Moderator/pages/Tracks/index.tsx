import Header from "./components/Header";
import TracksTable from "./components/TracksTable";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useAppDispatch } from "../../../../app/hooks";
import { fetchAllTracks } from "../../../../redux/tracks/tracksSlice";
import { fetchAllComments } from "../../../../redux/comments/commentsSlice";

const Tracks = () => {
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchAllTracks());
      dispatch(fetchAllComments());
    }
  }, [auth_token, dispatch]);
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <TracksTable></TracksTable>
    </div>
  );
};

export default Tracks;
