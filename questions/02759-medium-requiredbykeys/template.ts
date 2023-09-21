type RequiredByKeys<T , K = keyof T> = Omit<T & Required<Pick<T,K & keyof T>>, never>
