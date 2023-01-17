interface User {
  name: string;
  occupation: string;
}

interface Admin {
  name: string;
  role: string;
}

export type Person = User | Admin;

export function isAdmin(person: Person): person is Admin {
  return "role" in person;
}

const a = isAdmin({ name: "hi", role: "3" });
const b = isAdmin({ name: "hi", occupation: "3" });
