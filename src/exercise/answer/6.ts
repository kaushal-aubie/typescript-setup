/*

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/

interface Human {
  name: string;
  age: number;
}

interface User extends Human {
  occupation: string;
}

interface Admin extends Human {
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function isAdmin(person: Person): person is Admin {
  return "role" in person;
}

export function isUser(person: Person): person is User {
  return "occupation" in person;
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";

  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);