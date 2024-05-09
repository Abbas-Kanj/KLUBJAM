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
    <div className="flex flex-wrap justify-start gap-[14px] ml-[200px] mr-[200px] mb-[40px]">
      {userPosts.map((post, i) => (
        <div key={i}>
          {post.post_picture.endsWith(".mp4") ? (
            <video
              src={`http://127.0.0.1:3000${post.post_picture}`}
              className="max-w-[315px] max-h-[440px]"
            />
          ) : (
            <img src={`http://127.0.0.1:3000${post.post_picture}`} alt="" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
