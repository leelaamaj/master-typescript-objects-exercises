"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLastElementOfProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values[values.length - 1] : undefined;
}
