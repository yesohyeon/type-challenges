type MyReturnType<T extends (...args: any[]) => unknown> = T extends (...args: any[]) => infer R ? R : never;
