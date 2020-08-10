export function isFunction(fn) {
    return typeof fn === "function";
}

export function isArrowFunction(fn) {
    new fn();
}

export function isAsyncFunction(fn) {
    return Object.prototype.toString.call(fn).includes("AsyncFunction");
}
