import { useEffect } from "react";
import Posts from "./Posts";
import Recommendations from "./Recommendations";
import Stories from "./Stories";
import { sendRequest } from "../../../../../core/remote/request";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { setPost } from "../../../../../redux/postsSlice";

const Body = () => {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);

  const getPosts = async () => {
    if (token) {
      try {
        const headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await sendRequest("GET", "/posts", "", headers);
        if ((res.status = 200)) {
          dispatch(setPost(res.data.result));
        }
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="flex flex-col relative ">
      <Stories></Stories>
      <Recommendations></Recommendations>
      <Posts></Posts>
    </div>
  );
};

export default Body;
