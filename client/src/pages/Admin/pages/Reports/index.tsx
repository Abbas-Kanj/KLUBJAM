import Header from "./components/Header";
import ReportsTable from "./components/ReportsTable";

const Reports = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <ReportsTable></ReportsTable>
    </div>
  );
};

export default Reports;
