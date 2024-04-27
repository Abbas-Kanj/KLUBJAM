import Posts from "./Posts";
import Recommendations from "./Recommendations";
import Stories from "./Stories";

const Body = () => {
  return (
    <div className="flex flex-col relative ">
      <Stories></Stories>
      <Recommendations></Recommendations>
      <Posts></Posts>
    </div>
  );
};

export default Body;
