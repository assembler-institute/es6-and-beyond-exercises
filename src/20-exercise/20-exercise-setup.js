import { isFunction } from "../utils/utils";

function setup20Exercise(exercise20) {
    if (isFunction(exercise20)) {
        exercise20();
    }
}

export default setup20Exercise;
