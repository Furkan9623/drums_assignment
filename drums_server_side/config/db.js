const mongoose = require("mongoose");
const DB_CONNECT = async () => {
  const URL = process.env.MONGO_URL;
  return mongoose
    .connect(URL, { useNewUrlParser: true })
    .then((res) => console.log(res.connection.db.databaseName))
    .catch((er) => console.log(er));
};
module.exports = DB_CONNECT;
