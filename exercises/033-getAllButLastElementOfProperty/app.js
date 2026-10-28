"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllButLastElementOfProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.slice(0, -1) : [];
}
