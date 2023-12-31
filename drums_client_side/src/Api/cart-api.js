import axios from "axios";
const URL = "https://books-store-app-78eg.onrender.com/api/v1";
const ADD_CART_BOOKS = async (data) => {
  return axios
    .post(`${URL}/cart/add-cartbooks`, data)
    .then((res) => res)
    .catch((er) => er);
};

const GET_ALL_CART_BOOKS = async (id) => {
  return axios
    .get(`${URL}/cart/get-cartbooks/${id}`)
    .then((res) => res)
    .catch((er) => er);
};

const DELETE_CART_BOOKS = async (id) => {
  return axios
    .delete(`${URL}/cart/del-cartbooks/${id}`)
    .then((res) => res)
    .catch((er) => er);
};
const DELETE_ALL_CARTITEM = async (id) => {
  return axios
    .patch(`${URL}/cart/del-all-cartbooks/${id}`)
    .then((res) => res)
    .catch((er) => er);
};
export {
  ADD_CART_BOOKS,
  GET_ALL_CART_BOOKS,
  DELETE_CART_BOOKS,
  DELETE_ALL_CARTITEM,
};
