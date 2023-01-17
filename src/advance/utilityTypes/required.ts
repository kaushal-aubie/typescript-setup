interface Props {
  a?: number;
  b?: string;
}

const obj1: Required<Props> = { a: 5, b: "8" };
