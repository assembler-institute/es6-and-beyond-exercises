import { isFunction } from "../utils/utils";

function setup02Exercise(exercise02) {
    if (isFunction(exercise02)) {
        exercise02();
    }
}

export default setup02Exercise;
