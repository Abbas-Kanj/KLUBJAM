import defaultLogo from "../../../../assets/Navbar/images/Ellipse 38.svg";

interface AddModProps {
  setopenAddModPopup: (open: boolean) => void;
}

const AddModPopup: React.FC<AddModProps> = ({ setopenAddModPopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form className="flex flex-col w-[1000px] h-[650px] rounded-xl bg-background">
        <div className="flex justify-between ">
          <p
            className="text-red-500 font-bold cursor-pointer ml-[20px] mt-[10px]"
            onClick={() => setopenAddModPopup(false)}
          >
            X
          </p>
          <p className="w-[146px] rounded-xl text-primary border border-solid border-primary bg-background font-medium text-[14px] pt-[8px] pb-[8px] pr-[25px] pl-[25px] text-center cursor-pointer hover:opacity-50 mt-[10px] mr-[20px]">
            Save Changes
          </p>
        </div>
        <div className="flex flex-col pb-[36px] pl-[108px] pr-[108px] ">
          <div className="flex flex-col">
            <h2 className="text-greyText font-semibold text-[16px]">Avatar</h2>
            <img
              src={defaultLogo}
              alt=""
              className="w-[164px] h-[164px] mb-[10px] mt-[20px]"
            />
          </div>
          <div className="flex gap-[56px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                />
              </div>
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Biography
              </label>
              <textarea
                name=""
                id=""
                className=" bg-inputBox rounded-lg w-[347px] h-[165px] p-2 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText"
                >
                  Fullname
                </label>
                <input
                  type="text"
                  className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="font-semibold text-[14px] text-greyText "
                >
                  Date of birth
                </label>
                <input
                  type="text"
                  className="bg-inputBox w-[347px] h-[37px] rounded focus:outline-none p-1"
                />
              </div>
              <div className="flex justify-between">
                <button className="w-[93px] h-[35px] bg-tableUpdateBtn text-black rounded font-medium cursor-pointer hover:bg-opacity-50">
                  Activate
                </button>
                <button className="w-[93px] h-[35px] bg-yellow-500 text-black rounded font-medium cursor-pointer hover:bg-opacity-50">
                  Suspend
                </button>
                <button className="w-[93px] h-[35px] bg-tableDeleteBtn text-black rounded font-medium cursor-pointer hover:bg-opacity-50">
                  Ban
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddModPopup;
