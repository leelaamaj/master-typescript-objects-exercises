function addArrayProperty(obj: Record<string, unknown>, key: string, arr: unknown[]): Record<string, unknown> {
 obj[key]=arr; return obj;
}
export {};
