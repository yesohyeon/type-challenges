type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer U
  ? (...args: Reverse<P>) => U
  : never;
