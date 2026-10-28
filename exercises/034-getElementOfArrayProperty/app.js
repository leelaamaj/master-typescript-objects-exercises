"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementOfArrayProperty(obj, key, index) {
    const values = obj[key];
    return Array.isArray(values) ? values[index] : undefined;
}
