const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
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
	if (!request.body.username || !request.body.password) {
		response.status(400).send({ msg: "Incomplete data for creating new user" });
	} else {
		users.push({
			username: request.body.username,
			password: request.body.password,
			id: users.length,
		});
		response.status(201).send({
			user: users[users.length - 1],
		});
	}
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
