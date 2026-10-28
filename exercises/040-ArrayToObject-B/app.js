"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fromListToObject(array) {
    const result = {};
    for (const pair of array) {
        if (Array.isArray(pair))
            result[String(pair[0])] = pair[1];
    }
    return result;
}
