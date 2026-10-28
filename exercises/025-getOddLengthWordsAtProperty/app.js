"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOddLengthWordsAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.filter((value) => typeof value === "string" && value.length % 2 !== 0) : [];
}
