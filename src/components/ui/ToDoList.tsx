import { List } from "@chakra-ui/react";
import { IToDoListProps } from "../../types/types";
import ToDoListItem from "./ToDoListItem";

function ToDoList({removeTodo, toggleTodo, todos}:IToDoListProps) {
  return (
    <List spacing={3}>
      {todos.map((todo) => (
        <ToDoListItem removeTodo={removeTodo} toggleTodo={toggleTodo} todo={todo}></ToDoListItem>
      ))}
    </List>
  );
}

export default ToDoList;
