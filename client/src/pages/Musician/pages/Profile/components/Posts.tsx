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
      {userPosts
        ?.slice()
        .reverse()
        .map((post, i) => (
          <div key={i}>
            {post.post_picture.endsWith(".mp4") ? (
              <video
                src={`http://127.0.0.1:3000${post.post_picture}`}
                controls={true}
                className="max-w-[315px] max-h-[440px]"
              />
            ) : post.post_picture.endsWith(".mp3") ? (
              <audio
                src={`http://127.0.0.1:3000${post.post_picture}`}
                controls={true}
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
