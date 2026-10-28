"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformFirstAndLast(array) {
    if (array.length === 0)
        return {};
    return { [String(array[0])]: array[array.length - 1] };
}
