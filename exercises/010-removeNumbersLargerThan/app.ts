function removeNumbersLargerThan(num: number, obj: Record<string, unknown>): Record<string, unknown> {
 for(const key in obj){const value=obj[key];if(typeof value==="number" && value>num) delete obj[key];}return obj;
}
export {};
