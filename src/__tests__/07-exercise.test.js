import exercise07 from "../07-exercise/07-exercise";
import { isArrowFunction } from "../utils/utils";

describe("07-exercise", function () {
    test("store an arrow function in the `func` variable", () => {
        const result = exercise07();

        expect(typeof result).toBe("function");
    });

    test("func should be an arrow function", () => {
        expect(function () {
            isArrowFunction(exercise07());
        }).toThrow(/fn is not a constructor/);
    });

    test("func should return the sum of the parameters", () => {
        expect(() => {
            exercise07()(5, 5);
        }).not.toThrow();

        let result = exercise07()(5, 5);

        expect(result).toBe(10);
    });
});
