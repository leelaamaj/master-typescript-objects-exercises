"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renameBookImmutable(book, newTitle) {
    return { ...book, title: newTitle };
}
