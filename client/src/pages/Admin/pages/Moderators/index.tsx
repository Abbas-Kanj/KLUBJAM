import Header from "./components/Header";
import MusicianTable from "./components/MusicianTable";

const Moderators = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <MusicianTable></MusicianTable>
    </div>
  );
};

export default Moderators;
