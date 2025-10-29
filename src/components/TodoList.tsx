import { useContext, useState } from "react";
import {
  Box,
  Input,
  Button,
  List,
  ListItem,
  Checkbox,
  IconButton,
  HStack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { AppContext } from "../context/AppContext";

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
      <Box textAlign="center" mb={6}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          To-Do List
        </Text>
      </Box>

      {/* Lista delle todo */}
      <List spacing={3}>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            py={3}
            px={4}
            borderRadius="xl"
            bg={todo.completed ? "gray.100" : "white"}
            _dark={{ bg: "gray.800" }}
            boxShadow="sm"
          >
            <HStack justify="space-between" align="center">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                colorScheme="teal"
              >
                <Text
                  as={todo.completed ? "del" : undefined}
                  fontSize="lg"
                  noOfLines={1}
                >
                  {todo.title}
                </Text>
              </Checkbox>
              <IconButton
                aria-label="Rimuovi"
                icon={<DeleteIcon />}
                size="sm"
                colorScheme="red"
                variant="ghost"
                onClick={() => removeTodo(todo.id)}
              />
            </HStack>
          </ListItem>
        ))}
      </List>

      {/* Floating Action Button */}
      <Box
        position="fixed"
        bottom="5"
        right="5"
        zIndex="10"
      >
        <Button
          onClick={onOpen}
          colorScheme="teal"
          borderRadius="full"
          boxShadow="lg"
          width="56px"
          height="56px"
          p={0}
        >
          <AddIcon boxSize={5} />
        </Button>
      </Box>

      {/* Modale per aggiungere nuova todo */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
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