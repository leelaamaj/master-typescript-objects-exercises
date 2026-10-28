function removeOddValues(obj: Record<string, unknown>): Record<string, unknown> {
 for(const key in obj){const value=obj[key];if(typeof value==="number" && Math.abs(value%2)===1) delete obj[key];}return obj;
}
export {};
