"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEvenElementsAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.filter(value => typeof value === "number" && value % 2 === 0) : [];
}
