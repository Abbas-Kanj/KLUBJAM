import { sendRequest } from "../../core/remote/request";

export const fetchAllCoinRequestsApi = async () => {
  const res = await sendRequest("GET", "/coinRequests", "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};
