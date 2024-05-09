import { useAppSelector } from "../../../../../app/hooks";

const CommentsTable = () => {
  const comments = useAppSelector((state) => state.comments.comments);

  return (
    <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
      <table className="w-[1100px] mx-auto h-auto">
        <thead className="bg-inputBox border-b-2 border-gray-200">
          <tr>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3  text-sm font-semibold tracking-wide text-left">
              Post ID
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Commenter
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Comment
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Created At
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          {comments?.map((comment, i) => (
            <tr key={i} className="bg-tableRow">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="#" className="font-bold text-black hover:underline">
                  {comment.id}
                </a>
              </td>
              <td className="p-3 text-sm font-bold text-black whitespace-nowrap">
                {comment.post_id}
              </td>
              <td className="p-3 text-sm text-black  whitespace-nowrap">
                {comment.user.username}
              </td>
              <td className="p-3 text-sm  text-clip whitespace-normal max-w-[500px] text-black">
                {comment.content}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-tableUpdateBtn bg-gray-500 rounded-lg ">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap flex justify-evenly">
                <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableDeleteBtn text-black rounded-md  cursor-pointer hover:bg-opacity-30">
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;
