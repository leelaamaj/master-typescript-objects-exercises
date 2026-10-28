function transformFirstAndLast(array: unknown[]): Record<string, unknown> {
 if(array.length===0) return {};return {[String(array[0])]:array[array.length-1]};
}
export {};
