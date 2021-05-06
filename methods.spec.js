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
	it("returns given array with single unrequested entry removed", () => {
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
	it("returns given array with multiple unrequested entries removed", () => {
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
				{
					id: 3,
					username: "test",
					password: "password",
				},
				{
					id: 4,
					username: "anthony",
					password: "12345",
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
			{
				id: 3,
				username: "test",
				password: "password",
			},
		];
		expect(actual).to.eql(expected);
	});
});

describe("addKey", () => {
	it("returns [] when passed [] and empty string", () => {
		const actual = addKey([], "");
		const expected = [];
		expect(actual).to.eql(expected);
	});
	it("returns array with key added successfully to one value", () => {
		const actual = addKey(
			[
				{
					id: 0,
					username: "test",
					password: "test",
				},
			],
			"admin"
		);
		const expected = [
			{
				id: 0,
				username: "test",
				password: "test",
				admin: undefined,
			},
		];
		expect(actual).to.eql(expected);
	});
	it("returns array with key added successfully to multiple array entries", () => {
		const actual = addKey(
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
			"admin"
		);
		const expected = [
			{
				id: 0,
				username: "test",
				password: "test",
				admin: undefined,
			},
			{
				id: 1,
				username: "admin",
				password: "test",
				admin: undefined,
			},
		];
		expect(actual).to.eql(expected);
	});
});
