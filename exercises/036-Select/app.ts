function select(arr: string[], obj: Record<string, unknown>) : Record<string, unknown> {
 const result:Record<string,unknown>={};for(const key of arr){if(Object.prototype.hasOwnProperty.call(obj,key)) result[key]=obj[key];}return result;
}
export {};
