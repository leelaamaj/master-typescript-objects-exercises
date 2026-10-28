"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsLessThan100AtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.filter(value => typeof value === "number" && value < 100) : [];
}
