"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLaceNameDataForShoes(inventory) {
    const result = [];
    for (const designer of inventory) {
        for (const shoe of designer.shoes) {
            const nameWords = shoe.name.split(" ");
            const targetWordIndex = nameWords.findIndex(word => word.includes("lace"));
            if (targetWordIndex !== -1)
                result.push({ nameWords, targetWordIndex });
        }
    }
    return result;
}
