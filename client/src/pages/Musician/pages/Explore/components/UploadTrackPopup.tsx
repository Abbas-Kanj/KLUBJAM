import { useState } from "react";

interface PostProps {
  setOpenUploadTrackPopup: (open: boolean) => void;
}

const UploadTrackPopup: React.FC<PostProps> = ({ setOpenUploadTrackPopup }) => {
  const [imagePath, setImagePath] = useState<string>("");
  const [image, setImage] = useState(
    "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  );
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(file);
    // sendTrackImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //   setImage(reader.result as string);
    };
  };
  return (
    <div className="flex">
      {/* <button onClick={createTrack}>send!</button> */}
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
      <div className="flex flex-col w-[460px] items-center gap-[12px] p-[16px] mt-[20px]">
        {/* <img src={image} /> */}
        <input
          id="audio-upload"
          type="file"
          accept="image/*"
          className="hidden"
          //   onChange={handleTrackUpload}
        />
        <label
          htmlFor="audio-upload"
          className="bg-primary w-[220px] text-[16px] font-bold rounded-lg text-center p-[6px] cursor-pointer"
        >
          Select track to upload
        </label>
      </div>
      <div className="flex flex-col justify-between pl-[30px] border-l border-solid border-[#565656]">
        <div className="flex items-center gap-[12px] align-center gap mt-[30px]">
          <img
            // src={user?.profile_picture}
            alt=""
            className="max-w-[40px] max-h-[40px]"
          />
          {/* <h5 className="text-[14px] font-medium">{user?.username}</h5> */}
        </div>
        {/* {error && <small className="text-red">{error}</small>} */}
      </div>
    </div>
  );
};

export default UploadTrackPopup;
