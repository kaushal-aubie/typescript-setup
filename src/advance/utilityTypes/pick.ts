interface Human {
  name: string;
  gender: string;
  age: number;
}

const person2: Pick<Human, "gender" | "age"> = { age: 20, gender: "male" };
