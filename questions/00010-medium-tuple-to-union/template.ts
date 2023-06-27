type TupleToUnion<T extends any[]> = T extends Array<infer ITEMS> ? ITEMS : never

// 다른 풀이
// type TupleToUnion<T extends any[]> = T[number]
