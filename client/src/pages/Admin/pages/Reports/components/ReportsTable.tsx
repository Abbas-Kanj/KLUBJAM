const ReportsTable = () => {
  return (
    <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
      <table className="w-[1140px] mx-auto h-auto">
        <thead className="bg-inputBox border-b-2 border-gray-200">
          <tr>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3  text-sm font-semibold tracking-wide text-left">
              Manager name
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Report Title
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Report Description
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Created At
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          <tr className="bg-tableRow">
            <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
              <a href="#" className="font-bold text-black hover:underline">
                1
              </a>
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              John Doe
            </td>
            <td className="p-3 text-sm text-black  whitespace-nowrap">
              Post Issue
            </td>
            <td className="p-3 text-sm  text-clip whitespace-normal max-w-[500px] text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              adipisci quas aliquid pariatur earum laudantium! Laborum earum
              ipsam eligendi molestiae cumque mollitia nostrum quae, sint
              voluptatum a! Ad, sint. Error!
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-tableUpdateBtn bg-gray-500 rounded-lg ">
                21/3/2024
              </span>
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider bg-tableUpdateBtn text-black rounded-lg hover:bg-opacity-30 cursor-pointer">
                Mark as Read
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
