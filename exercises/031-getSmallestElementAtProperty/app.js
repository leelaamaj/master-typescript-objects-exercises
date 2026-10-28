"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSmallestElementAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) && values.length ? Math.min(...values) : [];
}
