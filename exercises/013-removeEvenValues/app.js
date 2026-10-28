"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeEvenValues(obj) {
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "number" && value % 2 === 0)
            delete obj[key];
    }
    return obj;
}
