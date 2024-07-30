import Posts from "./Posts";

const Body = () => {
  return (
    <div
      className="flex flex-col lg:max-h-[560px] w-full overflow-y-scroll rounded-xl
     bg-gradient-to-bl from-pink-950 via-background to-background"
    >
      {/* <Stories></Stories> */}
      {/* <Recommendations></Recommendations> */}
      <Posts></Posts>
    </div>
  );
};

export default Body;
