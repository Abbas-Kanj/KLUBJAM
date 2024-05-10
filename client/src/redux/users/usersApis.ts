import { sendRequest } from "../../core/remote/request";

export const fetchAllUsersApi = async () => {
  const res = await sendRequest("GET", `/users`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};
