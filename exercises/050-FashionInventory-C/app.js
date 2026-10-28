"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderInventory(shoeList) {
    const rows = [];
    for (const designer of shoeList) {
        for (const shoe of designer.shoes) {
            if (shoe.name.includes("black"))
                rows.push([designer.name, shoe.name, shoe.price]);
        }
    }
    return rows;
}
