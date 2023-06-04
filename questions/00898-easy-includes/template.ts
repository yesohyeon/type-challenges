// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true
// }[U] extends true ? true : false;

type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2)
    ? true
    : false;

type Includes<T extends readonly any[], U> =
  T extends [infer First, ...infer Rest]
    ? IsEqual<First, U> extends true ? true : Includes<Rest, U>
    : false;
