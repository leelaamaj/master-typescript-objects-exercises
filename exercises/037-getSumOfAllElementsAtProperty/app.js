"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSumOfAllElementsAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.reduce((total, value) => total + value, 0) : 0;
}
