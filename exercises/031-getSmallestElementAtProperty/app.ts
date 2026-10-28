function getSmallestElementAtProperty(obj: Record<string, unknown>, key: string) : number | [] {
 const values=obj[key];return Array.isArray(values) && values.length ? Math.min(...values as number[]):[];
}
export {};
