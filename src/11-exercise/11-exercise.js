/**
 * Exercise 11:
 *
 * Finish the code of the `exercise11` function so that it:
 *
 * 1. Receives 2 parameters: `array` and `entry`
 *
 * @example
 *
 * function fn (array, entry) {...}
 *
 * 2. Executes the array.find() method to find the `entry`
 *    in the `array` parameter that the function receives.
 *
 * 3. Returns the result
 */

// Finish the code of the function
function exercise11(array, entry) {
    const searchedValue = array.find((element) => element === entry);
    return searchedValue;
}

// Don’t change the code bellow this line
import setup11Exercise from "./11-exercise-setup";

if (process.env.NODE_ENV !== "test") {
    setup11Exercise(() =>
        console.log(
            exercise11(
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "Wednesday"
            )
        )
    );
}

export default exercise11;
