import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

axios.defaults.baseURL = "http://127.0.0.1:3000/";

export const sendRequest = async (
  method: any,
  route: any,
  body: any | null
) => {
  const cookies = new Cookies();
  const auth_token = cookies.get("auth_token");
  const response = await axios.request({
    method: method,
    url: route,
    data: body,
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
  });

  if (response.status === 401) {
    const navigate = useNavigate();
    cookies.remove("auth_token");
    navigate("/");
  }

  return response;
};
