function getOddLengthWordsAtProperty(obj: Record<string, unknown>, key: string): string[] {
 const values=obj[key];return Array.isArray(values)?values.filter((value):value is string=>typeof value==="string" && value.length%2!==0):[];
}
export {};
