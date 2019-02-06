let dotenv = require("dotenv").config();
let mysql = require("mysql");
let moment = require("moment");
let mySQLPassword = process.env.MYSQL_PASSWORD;
let connection;

if (process.env.JAWSDB_URL) {
  console.log('using JawsDB');
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  console.log('not using JawsDB');
  connection =   mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: mySQLPassword,
    database: "bootcamp_Buddy"
  });
}
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");

});
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let sessions = [];
// Star Wars sessions (DATA)
// =============================================================
let Session = function (date, number, instructor, name, video) {
  this.date = moment(date).format('YYYY-MM-DD');
  this.number = number;
  this.instructor = instructor;
  this.name = name;
  this.video = video;
};
function addSession(session) {
  let query = connection.query(
    "INSERT INTO sessions SET ?",
    session,
    function (err, res) {
      if(err)
      console.log(err);
      else
      console.log(res.affectedRows + " new session added!\n");
    }
  )
}

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all sessions
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
