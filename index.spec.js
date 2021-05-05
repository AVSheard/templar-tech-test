const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("./index");

describe("/:id", () => {
	it("GET - 200 for successful request for user", () => {
		return request(app).get("/1").expect(200);
	});
	it("GET - returns an object", () => {
		return request(app)
			.get("/0")
			.then((res) => {
				expect(typeof res.body.user).to.equal("object");
			});
	});
	it("GET - returns requested user object", () => {
		return request(app)
			.get("/1")
			.then((res) => {
				expect(res.body.user).to.deep.equal({
					id: 1,
					username: "admin",
					password: "test",
				});
			});
	});
	it("GET - 404 with correct message for user id that does not exist", () => {
		return request(app)
			.get("/9999999")
			.expect(404)
			.then((res) => {
				expect(res.body.msg).to.equal("ID does not exist");
			});
	});
	it("GET - 400 with correct message for invalid id", () => {
		return request(app)
			.get("/NOT-AN-ID")
			.expect(400)
			.then((res) => {
				expect(res.body.msg).to.equal("Invalid user ID");
			});
	});
});

describe("/newUser", () => {
	it("POST - 201 for successfully adding new user", () => {
		return request(app)
			.post("/newUser")
			.send({ username: "anthony", password: "test" })
			.expect(201);
	});
	it("POST - returns an object", () => {
		return request(app)
			.post("/newUser")
			.send({ username: "AVSheard", password: "password" })
			.then((res) => {
				expect(typeof res.body.user).to.equal("object");
			});
	});
	it("POST - check id keys have correct values", () => {
		return request(app)
			.post("/newUser")
			.send({ username: "vincent", password: "hushHush" })
			.then((res) => {
				expect(res.body.user.username).to.equal("vincent");
				expect(res.body.user.password).to.equal("hushHush");
				expect(typeof res.body.user.id).to.equal("number");
			});
	});
	it("POST - 400 when body is missing from request", () => {
		return request(app)
			.post("/newUser")
			.expect(400)
			.then((res) => {
				expect(res.body.msg).to.equal("Incomplete data for creating new user");
			});
	});
	it("POST - 400 when username is missing from request", () => {
		return request(app)
			.post("/newUser")
			.send({ password: "justPassword" })
			.expect(400)
			.then((res) => {
				expect(res.body.msg).to.equal("Incomplete data for creating new user");
			});
	});
	it("POST - 400 when password is missing from request", () => {
		return request(app)
			.post("/newUser")
			.send({ username: "justUsername" })
			.expect(400)
			.then((res) => {
				expect(res.body.msg).to.equal("Incomplete data for creating new user");
			});
	});
});
