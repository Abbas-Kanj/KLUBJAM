import recommendedLogo from "../../../../assets/Home/images/Ellipse 36.svg";

interface PostProps {
  setOpenCommentsPopup: (open: boolean) => void;
  post: any;
}

const CommentsPopup: React.FC<PostProps> = ({ setOpenCommentsPopup, post }) => {
  console.log(post);

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
          <div className="min-w-[50%] ">
            <img
              src={`http://127.0.0.1:3000${post.post_picture}`}
              className="w-full h-full max-h-[632px] max-w-[600px]"
            />
          </div>
          <div className="flex flex-col  border-l border-solid border-[#565656]">
            <div className="flex items-center gap-[12px] pl-[15px] align-center gap mt-[10px] mb-[10px]">
              <img src={recommendedLogo} alt="" className="w-[40px] h-[40px]" />
              <h5 className="text-[15px] font-medium">{post.user.username}</h5>
            </div>
            <div className="w-[535px] border border-solid border-[#565656]"></div>
            <div className="flex flex-col">
              <div className="flex items-start gap-[12px] pl-[15px] align-center gap mt-[10px]">
                <img
                  src={recommendedLogo}
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
                  className="flex items-start gap-[12px] pl-[15px] align-center gap mt-[10px]"
                >
                  <img
                    src={recommendedLogo}
                    alt=""
                    className="w-[40px] h-[40px]"
                  />
                  <div className="flex items-center gap-2">
                    <h5 className="text-[15px] font-medium">
                      {v.user.username}{" "}
                      <small className="text-[14px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, animi soluta vel perspiciatis officia ratione
                        id praesentium omnis doloremque minima sed fugit
                        corporis, maiores excepturi! Explicabo quas voluptate
                        non inventore.
                      </small>
                    </h5>
                    {/* {v.content} */}
                    <h6 className="text-[14px]"> </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentsPopup;
