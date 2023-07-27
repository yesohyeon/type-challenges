type LengthOfString<
  S extends string,
  T extends string[] = []
  > = S extends `${string}${infer R}`
  ? LengthOfString<R, [...T, string]>
  : T['length'];
