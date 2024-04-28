import CommentsTable from "./components/CommentsTable";
import Header from "./components/Header";

const Comments = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <CommentsTable></CommentsTable>
    </div>
  );
};

export default Comments;
