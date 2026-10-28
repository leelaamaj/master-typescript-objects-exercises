function getAllButLastElementOfProperty(obj: Record<string, unknown>, key: string): unknown[] {
 const values=obj[key];return Array.isArray(values)?values.slice(0,-1):[];
}
export {};
