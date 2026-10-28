function removeArrayValues(obj: Record<string, unknown>): Record<string, unknown> {
 for(const key in obj){if(Array.isArray(obj[key])) delete obj[key];}return obj;
}
export {};
