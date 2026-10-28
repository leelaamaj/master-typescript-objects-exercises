"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllKeys(obj) {
    const keys = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
            keys.push(key);
    }
    return keys;
}
