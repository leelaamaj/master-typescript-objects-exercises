"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeNumbersLargerThan(num, obj) {
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "number" && value > num)
            delete obj[key];
    }
    return obj;
}
