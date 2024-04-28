interface UpdateMusicianProps {
  setOpenUpdateMusicianPopup: (open: boolean) => void;
}

const UpdateMusicianPopup: React.FC<UpdateMusicianProps> = ({
  setOpenUpdateMusicianPopup,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background p-[16px]">
        <div className="flex items-center w-full justify-between pl-[20px] pr-[20px] pt-[10px] pb-[20px] border-b border-solid border-[#565656]">
          <p
            className="text-red-500 font-bold cursor-pointer"
            onClick={() => setOpenUpdateMusicianPopup(false)}
          >
            X
          </p>
          <h3 className="font-semibold text-[18px]">Create new post</h3>
          <button className="font-semibold text-[16px] text-primary">
            Share
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col w-[460px] items-center gap-[12px] p-[16px] mt-[20px]">
            <img src={"image"} />
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              //   onChange={(e) => handleImageUpload(e)}
            />
            <label
              htmlFor="image-upload"
              className="bg-primary w-fit text-[16px] font-bold rounded-xl p-[6px] cursor-pointer"
            >
              Select image to upload
            </label>
          </div>
          <div className="flex flex-col justify-between pl-[30px] border-l border-solid border-[#565656]">
            <div className="flex items-center gap-[12px] align-center gap mt-[30px]">
              <img src={"recommendedLogo"} alt="" />
              <h5 className="text-[14px] font-medium">john</h5>
            </div>
            <textarea
              name=""
              id=""
              placeholder="Enter Captions..."
              className="border border-solid border-[#565656] bg-transparent rounded-lg w-[220px] h-[200px] p-2"
            ></textarea>

            <input
              type="text"
              placeholder="Enter hashtags..."
              className="border border-solid border-[#565656] bg-transparent rounded-lg p-2"
              //   onChange={(e) => setHashtags(e.target.value)}
            />
            {/* {error && <small className="text-red">{error}</small>} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateMusicianPopup;
