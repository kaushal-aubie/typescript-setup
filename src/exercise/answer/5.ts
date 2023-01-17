/*
Type Human, Person, Admin and User is missing, 
Admin has all property of Human and has role
User has all property of Human and has occupation

please define it and use
it in persons array and logPerson function in order to fix
all the TS errors.
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

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
