type TrimRight<S extends string> =
  S extends `${infer Left}${' ' | '\n' | '\t'}` ? (
    TrimRight<Left>
    ) : S
