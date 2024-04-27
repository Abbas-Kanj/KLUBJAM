import downArrow from "../../../../assets/Workspace/icons/chevron-down.svg";

const SearchBar = () => {
  return (
    <div className="flex ml-[355px] mt-[26px] gap-[10px] w-[776px] h-[36px]">
      <input
        type="text"
        placeholder="Find a project..."
        className="w-[516px]  pl-[10px] pt-[10px] pb-[10px] text-[14px] text-greyText bg-background rounded border border-solid border-greyText"
      />

      <div className="flex items-center justify-center w-[74px] h-[36px] bg-background rounded cursor-pointer p-[6px] border border-solid border-primary">
        <h2 className="font-bold text-[14px] text-greyText">Sort</h2>
        <img src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
