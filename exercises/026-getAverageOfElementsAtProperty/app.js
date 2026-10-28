"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAverageOfElementsAtProperty(obj, key) {
    const values = obj[key];
    if (!Array.isArray(values) || values.length === 0)
        return 0;
    return values.reduce((total, value) => total + value, 0) / values.length;
}
