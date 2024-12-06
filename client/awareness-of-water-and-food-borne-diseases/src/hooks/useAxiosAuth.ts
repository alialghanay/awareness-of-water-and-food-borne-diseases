import axios from "axios";

const UseAxiosAuth = () => {
  const token = process.env.API_KEY;
  const axiosAuth = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return axiosAuth;
};

export default UseAxiosAuth;
