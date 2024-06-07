import { sendRequest } from "../../core/remote/request";

export const fetchAllPlaylistsApi = async () => {
  const res = await sendRequest("GET", "/playlists", "");
  if (res.status === 200) {
    return res.data.result;
  }
  return null;
};
