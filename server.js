const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "119.18.54.20",
  user: "txptrlqz_blog_user",
  password: "Hw=w$q7(-xsb",
  database: "txptrlqz_blog",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error Connecting:", err.message);
  } else {
    console.log("Database Connected");
  }
});

app.listen(port, () => {
  console.log("Server is running...");
});
