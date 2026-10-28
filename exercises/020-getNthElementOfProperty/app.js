"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNthElementOfProperty(obj, key, n) {
    const values = obj[key];
    return Array.isArray(values) ? values[n] : undefined;
}
