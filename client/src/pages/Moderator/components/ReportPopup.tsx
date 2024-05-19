interface AddModProps {
  setopenReportPopup: (open: boolean) => void;
}

const ReportPopup: React.FC<AddModProps> = ({ setopenReportPopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <form className="flex flex-col w-[514] h-[420px] rounded-xl bg-background">
        <div className="flex justify-between ">
          <p
            className="text-red-500 font-bold cursor-pointer ml-[20px] mt-[10px]"
            onClick={() => setopenReportPopup(false)}
          >
            X
          </p>
        </div>
        <div className="flex flex-col pb-[20px] px-[70px] ">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[10px]">
              <label
                htmlFor=""
                className="font-semibold text-[14px] text-greyText"
              >
                Report Title
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
              Description
            </label>
            <textarea
              name=""
              id=""
              className=" bg-inputBox rounded-lg w-[347px] h-[165px] p-2 focus:outline-none"
            ></textarea>
            <button className="p-1 bg-primary rounded-md w-[94px] h-[38px] font-bold ml-[250px]">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportPopup;
