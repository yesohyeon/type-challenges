// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : { readonly [k in keyof T]: DeepReadonly<T[k]> };

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}
