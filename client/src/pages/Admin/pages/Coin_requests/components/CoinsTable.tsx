const CoinsTable = () => {
  return (
    <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
      <table className="w-[1100px] mx-auto h-auto">
        <thead className="bg-inputBox border-b-2 border-gray-200">
          <tr>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="p-3  text-sm font-semibold tracking-wide text-left">
              Requester Name
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Amount
            </th>

            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              Action
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
            <td className="p-3 text-sm text-black whitespace-nowrap">
              johndoe@gmail.com
            </td>
            <td className="p-3 text-sm font-semibold text-black whitespace-nowrap">
              200
            </td>

            <td className="p-3 text-sm text-black whitespace-nowrap">
              <span className="p-1.5 text-xs  uppercase tracking-wider bg-tableUpdateBtn text-black rounded-lg cursor-pointer hover:bg-opacity-30 font-bold">
                Accept
              </span>
            </td>

            <td className="p-3 text-sm text-black whitespace-nowrap ">
              <span className="p-1.5 text-xs uppercase tracking-wider bg-tableDeleteBtn text-black rounded-lg  cursor-pointer hover:bg-opacity-30 font-bold">
                Reject
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;