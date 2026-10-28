function getElementsGreaterThan10AtProperty(obj: Record<string, unknown>, key: string): unknown[] {
 const values=obj[key];return Array.isArray(values)?values.filter(value=>typeof value==="number" && value>10):[];
}
export {};
