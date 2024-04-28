import Header from "./components/Header";
import Moderatortable from "./components/ModeratorTable";

const Moderators = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <Moderatortable></Moderatortable>
    </div>
  );
};

export default Moderators;
