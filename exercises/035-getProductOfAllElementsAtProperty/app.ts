function getProductOfAllElementsAtProperty(obj: Record<string, unknown>, key: string): number {
 const values=obj[key];return Array.isArray(values) && values.length ? (values as number[]).reduce((product,value)=>product*value,1):0;
}
export {};
