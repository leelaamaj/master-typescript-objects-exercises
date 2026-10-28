function removeNumberValues(obj: Record<string, unknown>): Record<string, unknown> {
 for(const key in obj){if(typeof obj[key]==="number") delete obj[key];}return obj;
}
export {};
