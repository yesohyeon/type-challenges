type Length<T extends readonly any[]> = T extends { length: infer R } ? R : never;

// 다른 풀이
// type Length<T extends readonly any[]> = T["length"];
