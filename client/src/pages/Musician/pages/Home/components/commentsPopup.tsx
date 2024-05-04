import like from "../../../../assets/Home/icons/like.svg";
import comment from "../../../../assets/Home/icons/comment.svg";
import share from "../../../../assets/Home/icons/forward.svg";
import { useState } from "react";
import { useAppSelector } from "../../../../../app/hooks";
import { sendRequest } from "../../../../../core/remote/request";

interface PostProps {
  setOpenCommentsPopup: (open: boolean) => void;
  post: any;
}

const CommentsPopup: React.FC<PostProps> = ({ setOpenCommentsPopup, post }) => {
  const user = useAppSelector((state) => state.user.user);
  const [newcomment, setNewComment] = useState("");
  const [error, setError] = useState("");

  const validateComment = () => {
    if (newcomment === "") {
      setError("Please insert a comment");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const createComment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validateComment()) {
      try {
        const postData = {
          content: newcomment,
          userId: user?.id,
        };

        const headers = {
          "Content-Type": "application/json",
        };

        const res = await sendRequest(
          "POST",
          `/comments/${post.id}`,
          postData,
          headers
        );
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <p
        className="text-white text-[20px] absolute top-5 right-5 font-bold cursor-pointer"
        onClick={() => setOpenCommentsPopup(false)}
      >
        X
      </p>
      <form className="flex flex-col w-[70%] h-[90%] rounded-xl bg-background ">
        <div className="flex">
          <div className="min-w-[50%]">
            <img
              src={`http://127.0.0.1:3000${post.post_picture}`}
              className="w-full h-full max-h-[632px] max-w-[600px]"
            />
          </div>
          <div className="flex flex-col max-h-[632px] border-l border-solid border-[#565656]">
            <div className="flex flex-col ">
              <div className="flex items-center gap-[12px] pl-[15px] align-center gap mt-[10px] mb-[10px]">
                <img
                  src={post.user.profile_picture}
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <h5 className="text-[15px] font-medium">
                  {post.user.username}
                </h5>
              </div>
              <div className="w-[535px] border border-solid border-[#565656]"></div>
            </div>
            <div className="flex flex-col min-h-[330px] justify-between overflow-x-hidden overflow-scroll">
              <div className="flex items-center gap-[12px] pl-[15px] align-center">
                <img
                  src={post.user.profile_picture}
                  alt=""
                  className="w-[40px] h-[40px]"
                />
                <div className="flex items-center gap-2">
                  <h5 className="text-[15px] font-medium">
                    {post.user.username}
                  </h5>
                  <h6 className="text-[14px]">{post.caption}</h6>
                </div>
              </div>
              {post.comment.map((v: any, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-[12px] pl-[15px] align-center mt-[10px]"
                >
                  <img
                    src={v.user.profile_picture}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <div className="flex items-center gap-[10px]">
                    <h5 className="text-[15px] font-medium">
                      {v.user.username}
                      <small className="text-[14px] pl-[7px] font-normal">
                        {v.content}
                      </small>
                    </h5>
                    <h6 className="text-[14px]"> </h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[10px]">
              <div className="w-[535px] border border-solid border-[#565656]"></div>
              <div className=" flex mt-[10px] mb-[5px] gap-[18px] pl-[15px]">
                <img src={like} alt="" className="cursor-pointer" />
                <img src={comment} alt="" className="cursor-pointer" />
                <img src={share} alt="" className="cursor-pointer" />
              </div>
              <div className="pl-[15px] mb-[5px]">
                <h2 className="font-medium text-[14px]">{`${post.likes._count} likes`}</h2>
              </div>
              <div className="flex flex-col">
                <div className="w-[535px] border border-solid border-[#565656]"></div>
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    className="font-medium text-[14px] pl-[15px] text-white bg-transparent  border-transparent focus:border-transparent cursor-pointer hover:placeholder:text-white  border-0 focus:outline-none placeholder-white placeholder-opacity-50 mb-[10px] mt-[10px]"
                    placeholder="Add a comment..."
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    className="mr-[10px] text-primary cursor-pointer hover:opacity-50 font-bold"
                    onClick={createComment}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentsPopup;
