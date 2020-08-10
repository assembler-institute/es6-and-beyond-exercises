import { isFunction } from "../utils/utils";

function setup18Exercise(exercise18) {
    if (isFunction(exercise18)) {
        exercise18();
    }
}

export default setup18Exercise;
