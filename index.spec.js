const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("./index");

describe("/:id", () => {
	it("GET - 200 for successful request for user", () => {
		return request(app).get("/1").expect(200);
	});
	it("GET - returns requested user object", () => {
		return request(app)
			.get("/1")
			.then((res) => {
				expect(res.body.user).to.equal({
					id: 1,
					username: "admin",
					password: "test",
				});
			});
	});
});
