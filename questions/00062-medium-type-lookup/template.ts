 type LookUp<U, T> = U extends { type: T } ? U: never

// type LookUp<U, T extends string> = {
//   [K in T]: U extends { type: T } ? U : never
// }[T]
