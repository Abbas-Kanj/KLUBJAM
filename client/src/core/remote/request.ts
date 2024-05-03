import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:3000/";
const jwt = localStorage.getItem("token");

export const sendRequest = async (
  method: any,
  route: any,
  body: any,
  headers: any
) => {
  const response = await axios.request({
    method: method,
    url: route,
    data: body,
    headers: headers,
  });

  if (response.status === 401) {
    localStorage.removeItem("token");
  }

  return response;
};
