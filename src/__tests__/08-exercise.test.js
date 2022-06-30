import exercise08 from "../08-exercise/08-exercise";
import { isArrowFunction } from "../utils/utils";

describe("08-exercise", function () {
    test("return the `func` function", () => {
        const thunk = exercise08();

        expect(typeof thunk).toBe("function");
    });

    test("func should be an arrow function", () => {
        expect(function () {
            isArrowFunction(exercise08());
        }).toThrow(/fn is not a constructor/);
    });

    test("func should return the sum of the parameters", () => {
        expect(() => {
            exercise08()(5, 5);
        }).not.toThrow();

        let thunk = exercise08()(5, 5);

        expect(thunk).toBe(10);
    });
});
