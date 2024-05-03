import recommendedLogo from "../../../../assets/Home/images/Ellipse 36.svg";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../../../../core/remote/request";

interface PostProps {
  setOpenPostPopup: (open: boolean) => void;
}

const PostPopup: React.FC<PostProps> = ({ setOpenPostPopup }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [imageData, setImageData] = useState<File | null>(null);
  const [image, setImage] = useState(
    "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  );

  const validatePostForm = () => {
    if (caption === "" || hashtags === "" || imageData === null) {
      setError("Please fill empty fields");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageData(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };

  const createPost = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (token) {
      if (validatePostForm()) {
        const image = new FormData();
        image.append("file", imageData!);
        try {
          const headers = {
            "Content-Type": "multipart/form-data",
          };
          const res = await sendRequest(
            "POST",
            `/files/upload`,
            image,
            headers
          );
          if (res.status) {
            const x = res.data.filePath;
            console.log(x);

            try {
              const postData = {
                caption: caption,
                hashtags: hashtags,
                post_picture: x,
              };
              const headers = {
                "Content-Type": "application/json",
              };
              const res = await sendRequest(
                "POST",
                `/posts/1`,
                postData,
                headers
              );
              console.log("post created");

              setOpenPostPopup(false);
              // dispatch(addUserPosts(res.data));
            } catch (error: any) {
              console.log(error.message);
              setError(error.message);
            }
          }
        } catch (error: any) {
          console.log(error.message);
          setError(error.message);
        }
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-10 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form className="flex flex-col w-[784px] h-[550px] rounded-xl bg-background p-[16px]">
        <div className="flex items-center w-full justify-between pl-[20px] pr-[20px] pt-[10px] pb-[20px] border-b border-solid border-[#565656]">
          <p
            className="text-red-500 font-bold cursor-pointer"
            onClick={() => setOpenPostPopup(false)}
          >
            X
          </p>
          <h3 className="font-semibold text-[18px]">Create new post</h3>
          <button
            className="font-semibold text-[16px] text-primary"
            type="submit"
            onClick={createPost}
          >
            Share
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col w-[460px] items-center gap-[12px] p-[16px] mt-[20px]">
            <img src={image} />
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label
              htmlFor="image-upload"
              className="bg-primary w-[220px] text-[16px] font-bold rounded-lg text-center p-[6px] cursor-pointer"
            >
              Select image to upload
            </label>
          </div>
          <div className="flex flex-col justify-between pl-[30px] border-l border-solid border-[#565656]">
            <div className="flex items-center gap-[12px] align-center gap mt-[30px]">
              <img src={recommendedLogo} alt="" />
              <h5 className="text-[14px] font-medium">john</h5>
            </div>
            <textarea
              name=""
              id=""
              placeholder="Enter Captions..."
              className="border border-solid border-[#565656] bg-transparent rounded-lg w-[220px] h-[200px] p-2"
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Enter hashtags..."
              className="border border-solid border-[#565656] bg-transparent rounded-lg p-2"
              onChange={(e) => setHashtags(e.target.value)}
            />
            {error && <small className="text-red">{error}</small>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostPopup;
