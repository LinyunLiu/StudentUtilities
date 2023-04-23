//project requires express, cors, ytdl
const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");

const app = express();
app.listen(4000, () => {
  console.log("Server at port 4000");
});

// GET request to the server to the endpoint download to get the video
app.get("/download", (req, res) => {
  var URL = req.query.URL;
  res.json({ url: URL });
});

res.header("Content-Disposition", 'attachment; filename="video.mp4"');

ytdl(URL, {
  format: "mp4",
}).pipe(res);
