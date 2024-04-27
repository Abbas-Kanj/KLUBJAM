import Header from "./components/Header";
import CoinsTable from "./components/CoinsTable";

const CoinRequests = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <CoinsTable></CoinsTable>
    </div>
  );
};

export default CoinRequests;
