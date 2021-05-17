const fizzbuzz = require("../index");

describe("fizzbuzz", () => {
    test("fizzbuzz case value 30", () => {
        expect(fizzbuzz(30)).toStrictEqual("FizzBuzz");
    });

    test("fizz case value 9", () => {
        expect(fizzbuzz(9)).toStrictEqual("Fizz");
    });

    test("buzz case value 10", () => {
        expect(fizzbuzz(10)).toStrictEqual("Buzz");
    });

    test("etc case value 7", () => {
        expect(fizzbuzz(7)).toStrictEqual("7");
    });
})