const Production = () => {
  return (
    <div className="flex justify-center bg-background w-screen h-screen px-[12px] py-[20px]">
      <div>
        <div className="flex">
          <div className="w-[1210px] h-[75px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="flex">
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="flex mt-[9px] gap-[6px]">
          <div className="w-[187px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="w-[156px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="w-[854px] h-[620px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          <div className="flex flex-col gap-2">
            <div className="w-[270px] h-[240px] border-[2px] border-solid rounded-[5px] border-primary"></div>
            <div className="w-[270px] h-[370px] border-[2px] border-solid rounded-[5px] border-primary flex flex-col justify-between">
              <div></div>
              <div className="flex flex-col">
                <div className="border border-solid border-primary"></div>
                <div className="px-[5px] py-[9px] flex justify-between gap-1">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="border-[2px] border-solid rounded-[5px] border-primary w-[192px] h-[30px] bg-transparent p-1"
                  />
                  <button className="bg-primary rounded-[5px] flex-grow font-bold">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
