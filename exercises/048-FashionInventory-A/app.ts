interface Shoe {
  name: string;
  price: number;
}

interface InventoryItem {
  name: string;
  shoes: Shoe[];
}

function renderInventory(inventory: InventoryItem[]): unknown[][] {
 const rows:unknown[][]=[];for(const designer of inventory){for(const shoe of designer.shoes){rows.push([designer.name,shoe.name,shoe.price]);}}return rows;
}
export {};
