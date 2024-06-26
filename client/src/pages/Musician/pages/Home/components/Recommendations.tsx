import post from "../../../../assets/Home/icons/ic_baseline-post-add.svg";
import { useEffect, useState } from "react";
import PostPopup from "./PostPopup";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { sendRequest } from "../../../../../core/remote/request";
import { setUserRecommendations } from "../../../../../redux/user/userSlice";

const Recommendations = () => {
  const [openPostPopup, setOpenPostPopup] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.info);
  const recommendations = useAppSelector((state) => state.user.recommendations);

  const createFollow = async (v: { id: any } | undefined) => {
    try {
      const postData = {
        following_id: v?.id,
      };
      const res = await sendRequest("POST", `/follows/${user?.id}`, postData);
      if ((res.status = 201)) {
        console.log("follow created");
        dispatch(
          setUserRecommendations(
            recommendations.filter((user) => user.id !== v?.id)
          )
        );
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getRecommendations = async () => {
    try {
      const res = await sendRequest("GET", `/follows/${user?.id}`, "");
      if ((res.status = 200)) {
        dispatch(setUserRecommendations(res.data));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <div className="absolute top-[10px] right-0  mr-[108px]">
      {openPostPopup && (
        <PostPopup setOpenPostPopup={setOpenPostPopup}></PostPopup>
      )}
      <div className="flex gap-[10px] w-[288px]">
        <input
          type="text"
          placeholder="Find a Jammer..."
          className="w-[207px] h-[36px] pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
        />
        <div
          className="flex items-center justify-center w-[71px] h-[36px] bg-primary rounded cursor-pointer"
          onClick={() => {
            setOpenPostPopup(true);
          }}
        >
          <img src={post} alt="" />
          <h2 className="font-bold text-[14px]">Post</h2>
        </div>
      </div>
      <h2 className="mt-[31px] mb-[16px]">Suggested for you</h2>
      <div>
        {recommendations && recommendations.length > 0 ? (
          recommendations.map((v, i) => (
            <div
              key={i}
              className="flex items-center justify-between w-[288px] mb-[14px]"
            >
              <img
                src={v.profile_picture}
                alt=""
                className="max-w-[30px] max-h-[30px] rounded-full"
              />
              <div className="flex flex-col justify-between mr-[150px] ">
                <h2 className="font-medium text-[14px]">{v.username}</h2>
                <h2 className="font-medium text-[12px] text-greyText">
                  {v.fullname ? null : v.username}
                </h2>
              </div>
              <button
                className="font-medium text-[14px] text-primary hover:opacity-50"
                onClick={() => {
                  createFollow(v);
                }}
              >
                Follow
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-greyText">No suggested users</h2>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
