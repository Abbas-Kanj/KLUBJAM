import { sendRequest } from "../../core/remote/request";

export const fetchAllCommentsApi = async () => {
  const res = await sendRequest("GET", "/comments", "");
  if (res.status == 200) {
    return res.data.result;
  }
  return null;
};
