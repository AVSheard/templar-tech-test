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
});
