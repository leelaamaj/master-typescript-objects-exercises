function addObjectProperty(obj1: Record<string, unknown>, key: string, obj2: Record<string, unknown>): Record<string, unknown> {
 obj1[key]=obj2; return obj1;
}
export {};
