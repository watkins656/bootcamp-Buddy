let db = require("../models");

app.get("/api/sessions", function (req, res) {
    return res.json(sessions);
  });
  
  // Displays a single session, or returns false
  app.get("/api/sessions/:session", function (req, res) {
    var chosen = req.params.session;
  
    console.log(chosen);
  
    for (var i = 0; i < sessions.length; i++) {
      if (chosen === sessions[i].number) {
        return res.json(sessions[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New sessions - takes in JSON input
  app.post("/api/sessions", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(req.body);
    var newsession = req.body;
  
  
    console.log(newsession);
  
    sessions.push(newsession);
    addSession(newsession);
    res.json(newsession);
  });
  
  