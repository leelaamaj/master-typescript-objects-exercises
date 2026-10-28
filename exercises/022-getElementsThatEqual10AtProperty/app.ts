function getElementsThatEqual10AtProperty(obj: Record<string, unknown>, key: string): unknown[] {
 const values=obj[key];return Array.isArray(values)?values.filter(value=>value===10):[];
}
export {};
