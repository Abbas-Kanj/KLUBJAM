import Body from "./components/Body";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className="flex flex-col absolute right-0 min-w-[1308px] bg-backgroundDark">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
