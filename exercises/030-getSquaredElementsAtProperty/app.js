"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSquaredElementsAtProperty(obj, key) {
    const values = obj[key];
    return Array.isArray(values) ? values.map(value => value * value) : [];
}
