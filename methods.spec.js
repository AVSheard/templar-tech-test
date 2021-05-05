const { expect } = require("chai");

const { filterByUsername, addKey } = require("./methods");

describe("filterByUsername", () => {
	it("returns [] when passed [] and empty string", () => {
		const actual = filterByUsername([], "");
		const expected = [];
		expect(actual).to.eql(expected);
	});
});
