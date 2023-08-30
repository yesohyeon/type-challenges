type AnyOf<T extends readonly any[]> = T[number] extends undefined | null | 0 | '' | false | [] | {[key: string]: never}
  ? false : true;
