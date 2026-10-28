"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getElementsThatEqual10AtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.filter(value => value === 10) : [];
}
