import { useState } from "react";
import { sendRequest } from "../../../../../core/remote/request";
import { useAppSelector } from "../../../../../app/hooks";
import Cookies from "js-cookie";

interface PostProps {
  setOpenUploadTrackPopup: (open: boolean) => void;
}

const UploadTrackPopup: React.FC<PostProps> = ({ setOpenUploadTrackPopup }) => {
  const authToken = Cookies.get("auth_token");
  const user = useAppSelector((state) => state.user.info);
  const [error, setError] = useState("");
  const [imagePath, setImagePath] = useState<string>("");
  const [audioPath, setAudioPath] = useState<string>("");
  const [image, setImage] = useState(
    "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  );
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(file);
    sendTrackImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };

  const handleTrackUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = e.target.files![0];
    console.log(audio);
    sendTrackAudio(audio);
  };

  const sendTrackImage = async (file: any) => {
    const formdata = new FormData();
    formdata.append("directoryPath", `uploads/tracks/track_images`);
    formdata.append("file", file!);
    console.log(formdata);

    try {
      const res = await sendRequest("POST", `/files/upload`, formdata);
      if (res) {
        const imagePath = res.data.filePath;
        console.log("image path:", imagePath);
        setImagePath(imagePath);
      }
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const sendTrackAudio = async (audio: any) => {
    try {
      const trackdata = new FormData();
      trackdata.append("directoryPath", `uploads/tracks/track_audio`);
      trackdata.append("file", audio!);
      console.log(trackdata);

      const res = await sendRequest("POST", `/files/upload`, trackdata);
      const audioPath = res.data.filePath;
      console.log("audio path:", audioPath);
      setAudioPath(audioPath);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const createTrack = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (authToken) {
      console.log("postdata:", audioPath);
      console.log("postdata:", imagePath);
      try {
        const postData = {
          track_name: "test",
          duration: "test",
          audio_url: audioPath,
          track_image: imagePath,
          explicit: "test",
          status: "test",
        };
        console.log(postData);
        const res = await sendRequest("POST", `/tracks/${user?.id}`, postData);
        if ((res.status = 201)) {
          console.log("track created");
        }
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex">
      <button onClick={createTrack}>send!</button>
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
        <input
          id="audio-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleTrackUpload}
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
