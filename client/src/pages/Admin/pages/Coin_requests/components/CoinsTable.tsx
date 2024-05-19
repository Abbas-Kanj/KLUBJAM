import { useAppSelector } from "../../../../../app/hooks";

const CoinsTable = () => {
  const coinRequests = useAppSelector(
    (state) => state.coinRequests.coinRequests
  );

  return (
    <div className="mt-[26px] w-[1200px] mx-auto h-auto rounded pt-[22px] pb-[22px] pl-[20px] pr-[20px] bg-tableBackground ">
      <table className="w-[1140px] mx-auto h-auto">
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
              Requested Date
            </th>
            <th className=" p-3 text-sm font-semibold tracking-wide text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          {coinRequests?.map((coinRequest, i) => (
            <tr key={i} className="bg-tableRow">
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <a href="#" className="font-bold text-black hover:underline">
                  {coinRequest.id}
                </a>
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {coinRequest.user.username}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                {coinRequest.user.email}
              </td>
              <td className="p-3 text-sm font-semibold text-black whitespace-nowrap">
                {coinRequest.amount}
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-tableUpdateBtn bg-gray-500 hover:bg-opacity-30 rounded-md ">
                  {new Date(coinRequest.createdAt).toLocaleDateString()}
                </span>
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap flex justify-evenly">
                <span className="p-1.5 text-xs  uppercase tracking-wider bg-tableUpdateBtn font-bold text-black rounded-md cursor-pointer hover:bg-opacity-50">
                  Accept
                </span>
                <span className="p-1.5 text-xs font-bold uppercase tracking-wider bg-tableDeleteBtn text-black rounded-md  cursor-pointer hover:bg-opacity-30">
                  Reject
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
