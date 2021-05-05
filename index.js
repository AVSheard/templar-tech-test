const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const getUser = (request, response, next) => {
	if (!parseInt(request.params.id) && request.params.id !== "0") {
		response.status(400).send({ msg: "Invalid user ID" });
	} else {
		const user = users.filter((user) => user.id == request.params.id);

		if (user.length === 0) {
			response.status(404).send({ msg: "ID does not exist" });
		} else {
			response.status(200).send({ user: user[0] });
		}
	}
};

const postUser = (request, response, next) => {
	response.status(201).send({ username: "anthony", password: "test" });
};

app.use("/newUser", postUser);
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
