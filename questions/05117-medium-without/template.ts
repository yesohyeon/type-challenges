type ToUnion<T> = T extends any[]? T[number] : T;
type Without<T, U> =
  T extends [infer R, ...infer F]
    ? R extends ToUnion<U>
      ? Without<F, U>
      : [R, ...Without<F, U>]
    : T
