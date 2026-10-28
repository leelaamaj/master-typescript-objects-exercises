interface Shoe {
  name: string;
  price: number;
}

interface InventoryItem {
  name: string;
  shoes: Shoe[];
}

interface Result {
  name: string;
  averagePrice: number;
}

function renderAverageCostPerDesigner(inventory: InventoryItem[]): Result[] {
 return inventory.map(designer=>({name:designer.name,averagePrice:designer.shoes.length ? designer.shoes.reduce((sum,shoe)=>sum+shoe.price,0)/designer.shoes.length:0}));
}
export {};
