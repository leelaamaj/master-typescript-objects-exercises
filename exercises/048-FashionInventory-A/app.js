"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderInventory(inventory) {
    const rows = [];
    for (const designer of inventory) {
        for (const shoe of designer.shoes) {
            rows.push([designer.name, shoe.name, shoe.price]);
        }
    }
    return rows;
}
