const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(3333, () => {
	console.log("server is running at 3333");
});
