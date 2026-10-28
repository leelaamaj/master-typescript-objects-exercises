"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeOddValues(obj) {
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "number" && Math.abs(value % 2) === 1)
            delete obj[key];
    }
    return obj;
}
