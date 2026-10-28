function getSumOfAllElementsAtProperty(obj: Record<string, unknown>, key: string): number {
 const values=obj[key];return Array.isArray(values)?(values as number[]).reduce((total,value)=>total+value,0):0;
}
export {};
