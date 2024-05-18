import { useState } from "react";
import { sendRequest } from "../../../../../core/remote/request";
import { useAppSelector } from "../../../../../app/hooks";
import Cookies from "js-cookie";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

interface PostProps {
  setOpenUploadTrackPopup: (open: boolean) => void;
}

const UploadTrackPopup: React.FC<PostProps> = ({ setOpenUploadTrackPopup }) => {
  const authToken = Cookies.get("auth_token");
  const user = useAppSelector((state) => state.user.info);
  const [error, setError] = useState("");
  const [imagePath, setImagePath] = useState<string>("");
  const [audioPath, setAudioPath] = useState<string>("");
  const [trackName, setTrackName] = useState("");
  const [image, setImage] = useState(
    "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  );
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    sendTrackImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };

  const handleTrackUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = e.target.files![0];
    sendTrackAudio(audio);
  };

  const sendTrackImage = async (file: any) => {
    const formdata = new FormData();
    formdata.append("directoryPath", `uploads/tracks/track_images`);
    formdata.append("file", file!);

    try {
      const res = await sendRequest("POST", `/files/upload`, formdata);
      if (res) {
        const imagePath = res.data.filePath;
        setImagePath(imagePath);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  const sendTrackAudio = async (audio: any) => {
    try {
      const trackdata = new FormData();
      trackdata.append("directoryPath", `uploads/tracks/track_audio`);
      trackdata.append("file", audio!);
      const res = await sendRequest("POST", `/files/upload`, trackdata);
      const audioPath = res.data.filePath;
      setAudioPath(audioPath);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const createTrack = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (authToken) {
      try {
        const postData = {
          track_name: trackName,
          duration: "",
          audio_url: audioPath,
          track_image: imagePath,
          explicit: "",
          status: "",
        };
        const res = await sendRequest("POST", `/tracks/${user?.id}`, postData);
        if ((res.status = 201)) {
          setOpenUploadTrackPopup(false);
        }
      } catch (error: any) {
        setError(error.message);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form className="flex flex-col w-[784px] h-[550px] rounded-xl bg-background p-[16px]">
        <div className="flex items-center w-full justify-between pl-[20px] pr-[20px] pt-[10px] pb-[20px] border-b border-solid border-[#565656]">
          <p
            className="text-red-500 font-bold cursor-pointer"
            onClick={() => setOpenUploadTrackPopup(false)}
          >
            X
          </p>
          <h3 className="font-semibold text-[18px]">Upload new track</h3>
          <button
            className="font-semibold text-[16px] text-primary"
            type="submit"
            onClick={createTrack}
          >
            Upload
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col h-auto w-[460px] items-center gap-[60px] p-[16px] mt-[20px]">
            <label htmlFor="image-upload" className="cursor-pointer flex">
              <img src={image} className="max-h-[200px] w-fit" />
              <ModeEditIcon
                style={{
                  backgroundColor: "#0FACFD",
                  borderRadius: "100%",
                  padding: "2px",
                }}
              />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          <div className="flex flex-col-reverse mt-10 items-center gap-4">
            <input
              type="text"
              placeholder="Enter track name..."
              className="border border-solid border-[#565656] bg-transparent rounded-lg p-2 w-[250px]"
              onChange={(e) => setTrackName(e.target.value)}
            />
            <div className="flex w-full items-center gap-[12px] p-[16px] ">
              <input
                id="audio-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleTrackUpload}
              />
              <label
                htmlFor="audio-upload"
                className="bg-primary w-[300px] text-[16px] font-bold rounded-lg text-center p-[6px] cursor-pointer"
              >
                Select track to upload
              </label>
            </div>
          </div>
        </div>

        {error && <small className="text-red">{error}</small>}
      </form>
    </div>
  );
};

export default UploadTrackPopup;
