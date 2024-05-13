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
            <div className="w-[266px] h-[280px] border-[2px] border-solid rounded-[5px] border-primary"></div>
            <div className="w-[266px] h-[330px] border-[2px] border-solid rounded-[5px] border-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
