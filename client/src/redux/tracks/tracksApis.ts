import { sendRequest } from "../../core/remote/request";

export const fetchAllTracksApi = async () => {
  const res = await sendRequest("GET", `/tracks`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};
