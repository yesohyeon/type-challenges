// 마지막 케이스 통과 안함
// declare function PromiseAll<T extends any[]>(values: readonly [...T]):
//   Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
  [key in keyof T]: Awaited<T[key]>
}>
