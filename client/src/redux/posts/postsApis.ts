import { sendRequest } from "../../core/remote/request";

export const fetchAllPostsApi = async () => {
  const res = await sendRequest("GET", "/posts", "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};
