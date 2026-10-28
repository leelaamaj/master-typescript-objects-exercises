interface Shoe {name:string;price:number;}
interface InventoryItem {name:string;shoes:Shoe[];}
function renderInventory(shoeList: InventoryItem[]): unknown[][] {
 const rows:unknown[][]=[];for(const designer of shoeList){for(const shoe of designer.shoes){if(shoe.name.includes("black")) rows.push([designer.name,shoe.name,shoe.price]);}}return rows;
}
export {};
