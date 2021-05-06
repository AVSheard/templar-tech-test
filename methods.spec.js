const { expect } = require("chai");

const { filterByUsername, addKey } = require("./methods");

describe("filterByUsername", () => {
	it("returns [] when passed [] and empty string", () => {
		const actual = filterByUsername([], "");
		const expected = [];
		expect(actual).to.eql(expected);
	});
	it("returns given array when given username matches", () => {
		const actual = filterByUsername(
			[
				{
					id: 0,
					username: "test",
					password: "test",
				},
			],
			"test"
		);
		const expected = [
			{
				id: 0,
				username: "test",
				password: "test",
			},
		];
		expect(actual).to.eql(expected);
	});
	it("returns given array with unrequested entries removed", () => {
		const actual = filterByUsername(
			[
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
			],
			"test"
		);
		const expected = [
			{
				id: 0,
				username: "test",
				password: "test",
			},
		];
		expect(actual).to.eql(expected);
	});
});
