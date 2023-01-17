/** Convert below code to typescript code */

function displayPerson(name, age, height) {
  let str1 = "Person named " + name + ",  " + age + " years old";
  let str2 = height !== undefined ? " and " + height + " feet tall" : "";
  console.log(str1 + str2);
}

displayPerson("John", 32);
