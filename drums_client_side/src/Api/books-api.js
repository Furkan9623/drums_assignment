import axios from "axios";
const URL = "http://localhost:8080/api/v1";
const GET_ALL_BOOKS = async (nameFilter, genres, title) => {
  return axios
    .get(
      `${URL}/books/get-books?author=${nameFilter}&genres=${genres}&title=${title}`
    )
    .then((res) => res)
    .catch((er) => er);
};
export { GET_ALL_BOOKS };
