const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const getUser = (request, response, next) => {
	response.send(users);
};

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
