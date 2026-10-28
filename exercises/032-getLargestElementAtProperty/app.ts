function getLargestElementAtProperty(obj: Record<string, unknown>, key: string) : number | [] {
 const values=obj[key];return Array.isArray(values) && values.length ? Math.max(...values as number[]):[];
}
export {};
