import Header from "./components/Header";
import TracksTable from "./components/TracksTable";

const Tracks = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <TracksTable></TracksTable>
    </div>
  );
};

export default Tracks;
