function removeEvenValues(obj: Record<string, unknown>): Record<string, unknown> {
 for(const key in obj){const value=obj[key];if(typeof value==="number" && value%2===0) delete obj[key];}return obj;
}
export {};
