function getAverageOfElementsAtProperty(obj: Record<string, unknown>, key: string): number {
 const values=obj[key];if(!Array.isArray(values) || values.length===0) return 0;return (values as number[]).reduce((total,value)=>total+value,0)/values.length;
}
export {};
