type Fill0<T extends string | number> = `${T}` extends `.${infer R}` ? `0.${R}` : `${T}`
type Trunc<T extends string | number> = Fill0<T> extends `${infer L}.${any}`
  ? L
  : `${T}`
