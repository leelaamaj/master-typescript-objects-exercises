interface Shoe {name:string;price:number;}
interface InventoryItem {name:string;shoes:Shoe[];}
function getLaceNameDataForShoes(inventory: InventoryItem[]): Record<string, unknown>[] {
 const result:Record<string,unknown>[]=[];for(const designer of inventory){for(const shoe of designer.shoes){const nameWords=shoe.name.split(" ");const targetWordIndex=nameWords.findIndex(word=>word.includes("lace"));if(targetWordIndex!==-1)result.push({nameWords,targetWordIndex});}}return result;
}
export {};
