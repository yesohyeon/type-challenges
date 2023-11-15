type IsEqual<T, U> = U extends T ? T extends U ? true : false : false
type IndexOf<T extends any[], U, Count extends any[] = []> = T extends [infer L, ...infer R]
  ? IsEqual<L, U> extends true
    ? Count['length']
    : Count['length'] extends T['length']
      ? -1
      : IndexOf<R, U, [...Count, 0]>
  : -1
