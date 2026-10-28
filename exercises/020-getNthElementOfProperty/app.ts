function getNthElementOfProperty(obj: Record<string, unknown>, key: string, n: number) : unknown | undefined {
 const values=obj[key]; return Array.isArray(values)?values[n]:undefined;
}
export {};
