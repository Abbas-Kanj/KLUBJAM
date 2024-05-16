import { useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { useAppDispatch } from "../../../../app/hooks";
import { fetchAllUsers } from "../../../../redux/users/usersSlice";
import Cookies from "universal-cookie";

const Home = () => {
  const dispatch = useAppDispatch();
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchAllUsers());
    }
  }, [auth_token, dispatch]);

  return (
    <div className="flex flex-col w-[1316px] bg-backgroundDark overflow-x-hidden overflow-scroll">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
