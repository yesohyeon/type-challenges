// type Chunk<T extends any[], N extends number, Swap extends any[] = []> =
//   Swap['length'] extends N
//     ? [Swap, ...Chunk<T, N>]
//     : T extends [infer K, ...infer L]
//       ? Chunk<L, N, [...Swap, K]>
//       : Swap extends [] ? Swap : [Swap]

type Chunk<T extends any[], N extends number = 1, C extends any[] = []> =
  T extends [infer R, ...infer U]
    ? C['length'] extends N
      ? [C, ...Chunk<T, N>]
      : Chunk<U, N, [...C, R]>
    : C extends []
      ? []
      : [C]
