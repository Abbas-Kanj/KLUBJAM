import Header from "./components/Header";
import PostsTable from "./components/PostsTable";

const Posts = () => {
  return (
    <div className="flex flex-col bg-backgroundDark">
      <Header></Header>
      <PostsTable></PostsTable>
    </div>
  );
};

export default Posts;
