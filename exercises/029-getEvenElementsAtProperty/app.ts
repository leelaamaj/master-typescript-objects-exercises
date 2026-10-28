function getEvenElementsAtProperty(obj: Record<string, unknown>, key: string): unknown[] {
 const values=obj[key];return Array.isArray(values)?values.filter(value=>typeof value==="number" && value%2===0):[];
}
export {};
