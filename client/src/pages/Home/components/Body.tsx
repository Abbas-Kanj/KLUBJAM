import Stories from "./Stories";

const Body = () => {
  return (
    <div className="flex flex-col relative ">
      <Stories></Stories>
      <div className=" h-[400px] bg-red-200"></div>
      <div className=" h-[400px] bg-blue-200"></div>
    </div>
  );
};

export default Body;
