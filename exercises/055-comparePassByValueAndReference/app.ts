interface ComparisonResult {
  original: unknown;
  copy: unknown;
  sameReference: boolean;
}

function comparePassByValueAndReference(input: unknown): ComparisonResult {
 const copy=Array.isArray(input)?[...input]:input!==null && typeof input==="object"?{...input}:input;return {original:input,copy,sameReference:input===copy};
}
export {};
