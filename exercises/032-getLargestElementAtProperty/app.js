"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLargestElementAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) && values.length ? Math.max(...values) : [];
}
