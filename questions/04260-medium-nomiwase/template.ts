type String2Union<S extends string> =
  S extends `${infer C}${infer REST}`
    ? C | String2Union<REST>
    : never;

type AllCombinations<
  STR extends string,
  S extends string = String2Union<STR>,
  > = [S] extends [never]
  ? ''
  : '' | {[K in S]: `${K}${AllCombinations<never, Exclude<S, K>>}`}[S];

