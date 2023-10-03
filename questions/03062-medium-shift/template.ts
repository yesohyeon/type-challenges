// type Shift<T extends any[]> = T extends [any,...infer U]?U:never
type Shift<T extends any[]> = T extends [any, ...infer R] ? R : T;
