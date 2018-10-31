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

// Star Wars sessions (DATA)
// =============================================================
let Session = function (date, id, instructor, name, video) {
  this.date = date;
  this.id = id;
  this.instructor = instructor;
  this.name = name;
  this.video = video;
};
let sessions = [];
addSessions();
function addSessions() {
  sessions.push(new Session(
    "8/2/18",
    "1.2",
    "Byron Ferguson",
    `Git'n Pro with HTML/CSS`,
    ""
  ));
  sessions.push(new Session(
    "7/31/18",
    "1.1",
    "Ryan LaRue",
    "The Zen of Coding",
    ""
  ));
  sessions.push(new Session(
    "8/22/18",
    "4.2",
    "",
    "jQuery Jubilee",
    "",
  ));
  sessions.push(new Session(
    "8/25/18",
    "4.3",
    "Byron Ferguson",
    "jQuery Calculator",
    "",
  ));
  sessions.push(new Session(
    "8/29/2018",
    "5.2",
    "Ryan LaRue",
    "JINKIES! It's More JavaScript! ",
    "",
  ));
  sessions.push(new Session(
    "9/5/2018",
    "5.3",
    "",
    "Javascript Jitters",
    "",
  ));
  sessions.push(new Session(
    "9/8/2018",
    "6.1 ",
    "",
    "Intro to APIs and AJAX",
    "",
  ));
  sessions.push(new Session(
    "9/12/2018",
    "6.3",
    "Ryan LaRue",
    "",
    "",
  ));
  sessions.push(new Session(
    "9/22/2018",
    "8.1 ",
    "Byron Ferguson",
    "Github Collaboration & Project Week",
    "",
  ));
  sessions.push(new Session(
    "9/24/2018",
    "8.2 ",
    "Project 1 - Project Management",
    "",
    "",
  ));
  sessions.push(new Session(
    "10/6/2018",
    "??.??",
    "",
    "",
  ));
  sessions.push(new Session(
    "10/8/2018",
    "10.2",
    "Ryan LaRue",
    "Nother Level of Node",
    "",
  ));
}
console.log(sessions);

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
app.get("/api/sessions", function (req, res) {
  return res.json(sessions);
});

// Displays a single session, or returns false
app.get("/api/sessions/:session", function (req, res) {
  var chosen = req.params.session;

  console.log(chosen);

  for (var i = 0; i < sessions.length; i++) {
    if (chosen === sessions[i].id) {
      return res.json(sessions[i]);
    }
  }

  return res.json(false);
});

// Create New sessions - takes in JSON input
app.post("/api/sessions", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newsession = req.body;


  console.log(newsession);

  sessions.push(newsession);

  res.json(newsession);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
