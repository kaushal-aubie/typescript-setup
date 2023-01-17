/** Narrowing */
function narrow(a: string | number | boolean | undefined) {
  if (typeof a == "string") {
    a;
  } else if (typeof a === "number") {
    a;
  } else if (typeof a === "boolean") {
    a;
  } else if (typeof a === "undefined") {
    a;
  } else {
    a;
  }
}
