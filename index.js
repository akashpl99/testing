const express = require("express");
const app = express();
const port = 9000;

const Connectdb = require("./db/Database");

Connectdb();
app.use(express.json()); //  make sure  that  data in req
app.use(express.urlencoded({ extended: true })); //  when we  woking with  urlencoded  data





app.use((err, req, res, next) => {
  const status = err.status || 500;
  const meassage = err.meassage || "somethig went wrong";
  return res.status(status).json({ success: false, status, meassage });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Example app listening on port ${port}!`);
});
