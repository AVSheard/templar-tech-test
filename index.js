const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/:id", getUser);

const users = [
	{
		id: 0,
		username: "test",
		password: "test",
	},
	{
		id: 1,
		username: "admin",
		password: "test",
	},
];
module.exports = app;
