"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOddElementsAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.filter(value => typeof value === "number" && Math.abs(value % 2) === 1) : [];
}
