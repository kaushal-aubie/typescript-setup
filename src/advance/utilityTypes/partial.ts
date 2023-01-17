/**
 * Partial
 */

interface Todo {
  title: string;
  description: string;
}

const todo1: Partial<Todo> = {};
const todo2: Todo = {
  title: "organize desk",
  description: "clear clutter",
};
