"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDisplayName(profile) {
    var _a;
    return (_a = profile.nickname) !== null && _a !== void 0 ? _a : profile.firstName;
}
