// create two interface user and post and use it

export const defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "How I eat so much cheese",
      },
      {
        id: 2,
        title: "Why I don't eat more vegetables",
      },
    ],
  };
  
  export const addTwoNumbers = (params) => {
    return params.first + params.second;
  };
  
  function displayPerson(name, age, height) {
    let str1 = "Person named " + name + ",  " + age + " years old";
    let str2 = height !== undefined ? " and " + height + " feet tall" : "";
    console.log(str1 + str2);
  }
  
  displayPerson("John", 32);
  
  
  
  let employee = {};
  employee.code = 10;
  employee.name = "John";
  
  console.log(employee);