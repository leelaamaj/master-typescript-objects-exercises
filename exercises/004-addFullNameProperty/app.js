"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFullNameProperty(obj) {
    obj.fullName = String(obj.firstName) + " " + String(obj.lastName);
    return obj;
}
