import trackImg from "../../../../assets/Explore/images/Rectangle 76-1.png";
import albumImg from "../../../../assets/Explore/images/Rectangle 77-1.png";
import artistImg from "../../../../assets/Explore/images/Ellipse 22.svg";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../app/hooks";
import { sendRequest } from "../../../../../core/remote/request";
import { setUserPosts } from "../../../../../redux/userSlice";

const All = () => {
  const authToken = Cookies.get("auth_token");
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [imageData, setImageData] = useState<File | null>(null);
  const [audioData, setAudioData] = useState<File | null>(null);
  const [image, setImage] = useState(
    "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  );
  const [audioPath, setAudioPath] = useState<string>("");
  const [imagePath, setImagePath] = useState<string>("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(file);
    // setImageData(file);
    sendTrackImage(file);

    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   setImage(reader.result as string);
    // };
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
        const res = await sendRequest("POST", `/tracks/1`, postData);
        console.log("track created");
        // dispatch(setUserPosts(res.data));
      } catch (error: any) {
        console.log(error.message);
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col">
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
          <img src={image} />
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
              src={user?.profile_picture}
              alt=""
              className="max-w-[40px] max-h-[40px]"
            />
            <h5 className="text-[14px] font-medium">{user?.username}</h5>
          </div>
          {error && <small className="text-red">{error}</small>}
        </div>
      </div>
      <div className="flex flex-col mt-[26px] ml-[33px]">
        <h2 className="font-bold text-[14px] mb-[26px]">New Tracks</h2>
        <div className="flex gap-[22px]">
          <div className="h-[162px]">
            <img src={trackImg} alt="" className="w-[130px] h-[130px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
          <div className="h-[162px]">
            <img src={trackImg} alt="" className="w-[130px] h-[130px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-[60px] ml-[33px] mb-[92px]">
        <h2 className="font-bold text-[14px] mb-[26px]">New Albums</h2>
        <div className="flex gap-[22px]">
          <div className="h-[241px]">
            <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
          <div className="h-[241px]">
            <img src={albumImg} alt="" className="w-[209px] h-[209px]" />
            <div className="flex flex-col justify-start mt-[6px]">
              <h2 className="font-medium text-[12px]">WonderWall-remix</h2>
              <h2 className="font-medium text-[12px] text-greyText">
                Jason Tucker
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-[33px] mb-[50px]">
        <h2 className="font-bold text-[14px] mb-[26px]">New Artists</h2>
        <div className="flex gap-[28px]">
          <div className="flex flex-col justify-center items-center">
            <img src={artistImg} alt="" className="h-[70px] w-[70px]" />
            <h2 className="font-medium text-[12px]">Big munna</h2>
            <h3 className="text-[10px] text-greyText">10 followers</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={artistImg} alt="" className="h-[70px] w-[70px]" />
            <h2 className="font-medium text-[12px]">Big munna</h2>
            <h3 className="text-[10px] text-greyText">10 followers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
