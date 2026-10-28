"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstElementOfProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values[0] : undefined;
}
