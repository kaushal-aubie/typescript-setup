console.log("hi");

const add = (a: number, b: number, c?: number): number => {
  return a + b + (c || 0);
};

const result = add(3, 5);

