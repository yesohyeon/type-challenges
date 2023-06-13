type MyParameters<T extends (...args: any[]) => unknown> = T extends (...unknown: infer U) => unknown ? U : false
