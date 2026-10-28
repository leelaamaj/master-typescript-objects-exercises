"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderAverageCostPerDesigner(inventory) {
    return inventory.map(designer => ({ name: designer.name, averagePrice: designer.shoes.length ? designer.shoes.reduce((sum, shoe) => sum + shoe.price, 0) / designer.shoes.length : 0 }));
}
