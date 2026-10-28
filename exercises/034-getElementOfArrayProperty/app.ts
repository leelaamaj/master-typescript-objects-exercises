function getElementOfArrayProperty(obj: Record<string, unknown>, key: string, index: number): unknown {
 const values=obj[key];return Array.isArray(values)?values[index]:undefined;
}
export {};
