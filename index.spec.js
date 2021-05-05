const chai = require("chai");
const { expect } = chai;
const request = require("supertest");
const app = require("./index");

describe("/:id", () => {
	it("GET - 200 for successful request for user", () => {
		return request(app).get("/1").expect(200);
	});
});
