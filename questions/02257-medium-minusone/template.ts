type CustomPop<T extends any[]> = T extends [...infer head, any] ? head : never;

type MinusOne<T extends number, A extends any[] = []> = A['length'] extends T
  ? CustomPop<A>['length']
  : MinusOne<T, [...A, 0]>

