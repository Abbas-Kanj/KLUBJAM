import { sendRequest } from "../../core/remote/request";

export const fetchAllProjectsApi = async () => {
  const res = await sendRequest("GET", `/projects`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};
