"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function select(arr, obj) {
    const result = {};
    for (const key of arr) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
            result[key] = obj[key];
    }
    return result;
}
