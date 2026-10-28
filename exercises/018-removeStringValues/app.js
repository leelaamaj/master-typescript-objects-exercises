"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeStringValues(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "string")
            delete obj[key];
    }
    return obj;
}
