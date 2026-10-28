function fromListToObject(array: unknown[]) : Record<string, unknown> {
 const result:Record<string,unknown>={};for(const pair of array){if(Array.isArray(pair)) result[String(pair[0])]=pair[1];}return result;
}
export {};
