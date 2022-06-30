import { isFunction } from "../utils/utils";

function setup12Exercise(exercise12) {
    if (isFunction(exercise12)) {
        exercise12();
    }
}

export default setup12Exercise;
