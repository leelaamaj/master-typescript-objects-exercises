function getSquaredElementsAtProperty(obj: Record<string, unknown>, key: string): unknown[] {
 const values=obj[key];return Array.isArray(values)?(values as number[]).map(value=>value*value):[];
}
export {};
