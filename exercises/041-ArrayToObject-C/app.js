"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformEmployeeData(array) {
    return array.map(employee => { const result = {}; if (Array.isArray(employee)) {
        for (const pair of employee) {
            if (Array.isArray(pair))
                result[String(pair[0])] = pair[1];
        }
    } return result; });
}
