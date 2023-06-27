type Last<T extends any[]> = [any, ...T][T["length"]];

// 다른 풀이
// type Last<T extends any[]> = T extends [...any[], infer last] ? last : never;
