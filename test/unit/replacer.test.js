const replaceEmbeddedJson = require("../../replacer");
const inputJson = require("./input.json");
const expectedJson = require("./expected.json");

describe("JSON replacer", () => {
    test('Should replace embedded JSON', () => {
        var exp = JSON.stringify(expectedJson, null, 4)
        var input = JSON.stringify(inputJson)
        var output = replaceEmbeddedJson(input)
        expect(output).toBe(exp);
    });
});
