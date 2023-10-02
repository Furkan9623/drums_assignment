import axios from "axios";
const URL = "https://books-store-app-78eg.onrender.com/api/v1";
const ADD_FAV_BOOKS = async (data) => {
  return axios
    .post(`${URL}/fav/add-favbooks`, data)
    .then((res) => res)
    .catch((er) => er);
};

const GET_ALL_FAV_BOOKS = async (id) => {
  return axios
    .get(`${URL}/fav/get-favbooks/${id}`)
    .then((res) => res)
    .catch((er) => er);
};

const DELETE_FAV_BOOKS = async (id) => {
  return axios
    .delete(`${URL}/fav/del-favbooks/${id}`)
    .then((res) => res)
    .catch((er) => er);
};
const DELETE_ALL_FAVBOOKS = async (id) => {
  return axios
    .patch(`${URL}/fav/del-allfavbooks/${id}`)
    .then((res) => res)
    .catch((er) => er);
};
export {
  ADD_FAV_BOOKS,
  GET_ALL_FAV_BOOKS,
  DELETE_FAV_BOOKS,
  DELETE_ALL_FAVBOOKS,
};
