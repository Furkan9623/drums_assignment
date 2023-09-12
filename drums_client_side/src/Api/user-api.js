import axios from "axios";
const URL = "http://localhost:8080/api/v1";
const REGISTER_USER = async (data) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  return axios
    .post(`${URL}/user/register`, data, config)
    .then((res) => res)
    .catch((er) => er);
};

const LOGIN_USER = async (data) => {
  return axios
    .post(`${URL}/user/login`, data)
    .then((res) => res)
    .catch((er) => er);
};
export { REGISTER_USER, LOGIN_USER };
