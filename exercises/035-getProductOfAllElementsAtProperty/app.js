"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProductOfAllElementsAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) && values.length ? values.reduce((product, value) => product * value, 1) : 0;
}
