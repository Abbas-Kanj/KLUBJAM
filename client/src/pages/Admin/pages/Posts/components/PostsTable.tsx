import { useAppSelector } from "../../../../../app/hooks";
import imgIcon from "../../../assets/icons/Group 157.svg";

const PostsTable = () => {
  const posts = useAppSelector((state) => state.post.posts);

  return (
    <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
      <table className="w-[1100px] mx-auto h-auto">
        <thead className="bg-inputBox border-b-2 border-gray-200">
          <tr>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3  text-sm font-semibold tracking-wide text-left">
              Post Owner
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Caption
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Created At
            </th>

            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Post Picture
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          {posts?.map((post, i) => (
            <tr key={i} className="bg-tableRow">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="#" className="font-bold text-black hover:underline">
                  {post.id}
                </a>
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {post.user.username}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {post.caption}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-tableUpdateBtn bg-gray-500 hover:bg-opacity-30 rounded-lg ">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                <img src={imgIcon} alt="" />
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap flex justify-evenly">
                <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableUpdateBtn text-black rounded-md cursor-pointer hover:bg-opacity-50">
                  Update
                </span>
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

export default PostsTable;
