"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeStringValuesLongerThan(num, obj) {
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === "string" && value.length > num)
            delete obj[key];
    }
    return obj;
}
