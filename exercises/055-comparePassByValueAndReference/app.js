"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comparePassByValueAndReference(input) {
    const copy = Array.isArray(input) ? [...input] : input !== null && typeof input === "object" ? { ...input } : input;
    return { original: input, copy, sameReference: input === copy };
}
