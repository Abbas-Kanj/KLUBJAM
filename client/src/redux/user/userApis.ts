import { sendRequest } from "../../core/remote/request";

export const fetchUserPostsApi = async (userId: number) => {
  const res = await sendRequest("GET", `/posts/${userId}`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};

export const fetchUserProjectsApi = async (userId: number) => {
  const res = await sendRequest("GET", `/projects/${userId}`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
};
