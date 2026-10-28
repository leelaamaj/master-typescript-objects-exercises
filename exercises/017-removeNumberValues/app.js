"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeNumberValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "number")
            delete obj[key];
    }
    return obj;
}
