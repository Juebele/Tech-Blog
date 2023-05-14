const express = require("express");
const app = express();
const port = process.env.port || 3001;

app.get("/", (req, res) => {
    // handles the root
});
app.route("/post")
.get ((req, res) => {})
.post("/post", (req, res) => {});