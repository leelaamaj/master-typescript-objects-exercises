function getAllKeys(obj: Record<string, unknown>): string[] {
 const keys:string[]=[];for(const key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)) keys.push(key);}return keys;
}
export {};
