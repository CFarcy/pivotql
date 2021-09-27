"use strict";

const compiler = require("./index.js");

describe("Basic types", () => {
  test("NUMBER", () => {
    expect(compiler({ type: "NUMBER", value: 10 })).toEqual({ filter: 10 });
  });
});