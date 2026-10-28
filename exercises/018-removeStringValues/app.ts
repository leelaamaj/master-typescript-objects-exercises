function removeStringValues(obj: Record<string, unknown>): Record<string, unknown> {
 for(const key in obj){if(typeof obj[key]==="string") delete obj[key];}return obj;
}
export {};
