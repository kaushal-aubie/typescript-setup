interface Person {
  name: string;
}

const person4: Readonly<Person> = {
  name: "kaushal",
};

person4.name = "vaibhav";
