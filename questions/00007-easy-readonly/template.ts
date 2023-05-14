type MyReadonly<T> = { readonly [P in keyof T] : T[P] };

//
interface Card {
  name: string;
  price: number
}

type readOnlyCard = Readonly<Card>;
let readonlyUser: readOnlyCard = {name: 'Sonata', price: 10000}
readonlyUser.price = 3 // 에러발생
