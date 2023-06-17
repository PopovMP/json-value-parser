"use strict";

const {strictEqual}    = require("assert");
const {describe, it}   = require("node:test");
const {parseJsonValue} = require("../index.js");

describe("parse string", () => {
    it("foo", () => {
        strictEqual(parseJsonValue("foo"), "foo");
    });

    it("complex string", () => {
        strictEqual(parseJsonValue("foo_(42).json"), "foo_(42).json");
    });
});

describe("parse boolean", () => {
    it("true", () => {
        strictEqual(parseJsonValue("true"), true);
    });

    it("false", () => {
        strictEqual(parseJsonValue("false"), false);
    });

    it("TRUE", () => {
        strictEqual(parseJsonValue("TRUE"), true);
    });

    it("FALSE", () => {
        strictEqual(parseJsonValue("FALSE"), false);
    });
});

describe("parse null", () => {
    it("null", () => {
        strictEqual(parseJsonValue("null"), null);
    });

    it("NULL", () => {
        strictEqual(parseJsonValue("NULL"), null);
    });
});

describe("parse integer", () => {
    it("42", () => {
        strictEqual(parseJsonValue("42"), 42);
    });

    it("+42", () => {
        strictEqual(parseJsonValue("+42"), 42);
    });

    it("-42", () => {
        strictEqual(parseJsonValue("-42"), -42);
    });
});

describe("parse float", () => {
    it("3.14", () => {
        strictEqual(parseJsonValue("3.14"), 3.14);
    });

    it("+.14", () => {
        strictEqual(parseJsonValue("+.14"), 0.14);
    });

    it("-3.1", () => {
        strictEqual(parseJsonValue("-3.1"), -3.1);
    });
});
