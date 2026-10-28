function getOddElementsAtProperty(obj: Record<string, unknown>, key: string): unknown[] {
 const values=obj[key];return Array.isArray(values)?values.filter(value=>typeof value==="number" && Math.abs(value%2)===1):[];
}
export {};
