import { useContext, useState } from "react";
import {
  Box,
  Input,
  Button,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { AppContext } from "../context/AppContext";
import ToDoActionButton from "./ui/ToDoActionButton";
import ToDoHeader from "./ui/ToDoHeader";
import ToDoList from "./ui/ToDoList";

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
      <ToDoActionButton onOpen={onOpen} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>Aggiungi nuova todo</ModalHeader>
          <ModalBody>
            <Input
              placeholder="Scrivi qui..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              size="md"
              borderRadius="md"
              autoFocus
            />
          </ModalBody>
          <ModalFooter>
            <HStack w="100%" justify="flex-end">
              <Button variant="ghost" onClick={onClose}>
                Annulla
              </Button>
              <Button colorScheme="teal" onClick={handleAdd}>
                Aggiungi
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
