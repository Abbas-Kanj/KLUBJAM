import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { fetchUserPosts } from "../../../../../redux/user/userSlice";
import Cookies from "universal-cookie";

const Posts = () => {
  const userPosts = useAppSelector((state) => state.user.posts);

  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth_token) {
      dispatch(fetchUserPosts());
    }
  }, [auth_token, dispatch]);
  return (
    <div className="flex flex-wrap justify-start gap-[14px] ml-[190px] mr-[190px] mb-[40px]">
      {userPosts.map((post, i) => (
        <div key={i}>
          {post.post_picture.endsWith(".mp4") ? (
            <video
              src={`http://127.0.0.1:3000${post.post_picture}`}
              className="max-w-[297px] max-h-[297px] min-h-[297px] min-w-[297px]"
            />
          ) : (
            <img
              src={`http://127.0.0.1:3000${post.post_picture}`}
              alt=""
              className="max-w-[297px] max-h-[297px] min-h-[297px] min-w-[297px]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
