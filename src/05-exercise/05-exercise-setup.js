import { isFunction } from "../utils/utils";

function setup05Exercise(exercise05) {
    if (isFunction(exercise05)) {
        exercise05();
    }
}

export default setup05Exercise;
