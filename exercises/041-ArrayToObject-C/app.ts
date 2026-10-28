function transformEmployeeData(array: unknown[]): Record<string, unknown>[] {
 return array.map(employee=>{const result:Record<string,unknown>={};if(Array.isArray(employee)){for(const pair of employee){if(Array.isArray(pair))result[String(pair[0])]=pair[1];}}return result;});
}
export {};
