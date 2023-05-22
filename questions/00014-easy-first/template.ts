type First<T extends any[]> = T extends [] ? never : T[0];

// extends
// https://www.typescriptlang.org/ko/docs/handbook/2/conditional-types.html

// 다른 풀이
// type First<T extends any[]> = T extends [infer P, ...any[]] ? P : never
// infer keyword설명 블로그 : https://blog.logrocket.com/understanding-infer-typescript/
// https://velog.io/@from_numpy/TypeScript-infer
