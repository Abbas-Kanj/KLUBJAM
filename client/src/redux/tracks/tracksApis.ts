import { sendRequest } from "../../core/remote/request";

export const fetchAllTracksApi = async () => {
  const res = await sendRequest("GET", `/tracks`, "");
  if (res.status == 200) {
    console.log(res.data.result);

    return res.data.result;
  }
  return null;
};
