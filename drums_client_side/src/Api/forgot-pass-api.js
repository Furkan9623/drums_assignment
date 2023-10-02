import axios from "axios";
const URL = "https://books-store-app-78eg.onrender.com/api/v1";
const Forogt_Password = async (email) => {
  return axios
    .patch(`${URL}/forgot/forgot`, { email })
    .then((res) => res)
    .catch((er) => er);
};

const Reset_Password = async (data) => {
  return axios
    .patch(`${URL}/forgot/reset`, data)
    .then((res) => res)
    .catch((er) => er);
};
export { Forogt_Password, Reset_Password };
