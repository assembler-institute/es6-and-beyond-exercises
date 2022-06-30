import { isFunction } from "../utils/utils";

function setup01Exercise(exercise01) {
    if (isFunction(exercise01)) {
        exercise01();
    }
}

export default setup01Exercise;
