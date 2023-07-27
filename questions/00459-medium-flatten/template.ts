// type Flatten<S extends any[], T extends any[] = []> =  S extends [infer X, ...infer Y] ?
//   X extends any[] ?
//     Flatten<[...X, ...Y], T> : Flatten<[...Y], [...T, X]>
//   : T

type Flatten<T> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [T]
