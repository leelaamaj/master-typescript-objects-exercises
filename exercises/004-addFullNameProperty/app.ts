function addFullNameProperty(obj: Record<string, unknown>): Record<string, unknown> {
 obj.fullName=String(obj.firstName)+" "+String(obj.lastName); return obj;
}
export {};
