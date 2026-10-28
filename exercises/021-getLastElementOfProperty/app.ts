function getLastElementOfProperty(obj: Record<string, unknown>, key: string) : unknown {
 const values=obj[key]; return Array.isArray(values)?values[values.length-1]:undefined;
}
export {};
