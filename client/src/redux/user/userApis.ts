import { sendRequest } from "../../core/remote/request";

export const fetchUserPostsApi = async (userId: number) => {
  const res = await sendRequest("GET", `/posts/${userId}`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
  return null;
};

export const fetchUserPersonalProjectsApi = async (userId: number) => {
  const res = await sendRequest(
    "GET",
    `projects/personalProjects/${userId}`,
    ""
  );
  if ((res.status = 200)) {
    return res.data.result;
  }
};

export const fetchUserGroupProjectsApi = async (userId: number) => {
  const res = await sendRequest("GET", `projects/groupProjects/${userId}`, "");
  if ((res.status = 200)) {
    return res.data.result;
  }
};

export const fetchUserTracksApi = async (userId: number) => {
  const res = await sendRequest("GET", `tracks/${userId}`, "");
  if ((res.status = 200)) {
    return res.data;
  } else {
    console.log("error ");
  }
};
