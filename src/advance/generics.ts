/**Generics */
function identity<Type = unknown>(
    arg1: Type,
    arg2: Type
  ): Type {
    if (typeof arg1 === "string" && typeof arg2 === "string") {
      return arg1 + arg2 as Type;
    } else if (typeof arg1 === "number" && typeof arg2 === "number") {
      return arg1 + arg2 as Type;
    }
    throw new Error("type not supported");
  }
  
  identity<string>('4', '6');
  