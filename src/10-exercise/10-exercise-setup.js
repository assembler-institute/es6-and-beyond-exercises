import { isFunction } from "../utils/utils";

function setup10Exercise(exercise10) {
    if (isFunction(exercise10)) {
        exercise10();
    }
}

export default setup10Exercise;
