import axios from "axios";

const URL = "https://books-store-app-78eg.onrender.com/api/v1";
const GET_ALL_BOOKS = async (nameFilter, genres, title) => {
  return axios
    .get(
      `${URL}/books/get-books?author=${nameFilter}&genres=${genres}&title=${title}`
    )
    .then((res) => res)
    .catch((er) => er);
};

// add books
const ADD_BOOKS = async (data) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  return axios
    .post(`${URL}/books/add-books`, data, config)
    .then((res) => res)
    .catch((er) => er);
};

// get user books
const USER_BOOKS = async (id) => {
  return axios
    .get(`${URL}/books/user-books/${id}`)
    .then((res) => res)
    .catch((er) => er);
};

// delete books
const DELETE_USER_BOOKS = async (id) => {
  return axios
    .delete(`${URL}/books/delete-books/${id}`)
    .then((res) => res)
    .catch((er) => er);
};
export { GET_ALL_BOOKS, ADD_BOOKS, USER_BOOKS, DELETE_USER_BOOKS };
