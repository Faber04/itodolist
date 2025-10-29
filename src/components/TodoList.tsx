import { useContext, useState } from "react";
import {
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";
import ToDoActionButton from "./ui/ToDoActionButton";
import ToDoHeader from "./ui/ToDoHeader";
import ToDoList from "./ui/ToDoList";
import ToDoModal from "./ui/ToDoModal";

export default function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useContext(AppContext);
  const [newTitle, setNewTitle] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addTodo(newTitle);
    setNewTitle("");
    onClose();
  };

  return (
    <Box
      pos="relative"
      minH="100vh"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
      px={4}
      py={6}
    >
      <ToDoHeader>iToDo List</ToDoHeader>
      <ToDoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      <ToDoModal isOpen={isOpen} handleAdd={handleAdd} newTitle={newTitle} onClose={onClose} setNewTitle={setNewTitle} />
      <ToDoActionButton onOpen={onOpen} />
    </Box>
  );
}
