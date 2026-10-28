function getFirstElementOfProperty(obj: Record<string, unknown>, key: string) : unknown {
 const values=obj[key]; return Array.isArray(values)?values[0]:undefined;
}
export {};
