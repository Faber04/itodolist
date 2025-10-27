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
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { AppContext } from "../context/AppContext";

export default function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useContext(AppContext);
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    addTodo(newTitle);
    setNewTitle("");
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="md">
      <HStack mb={4}>
        <Input
          placeholder="Nuova todo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleAdd}>
          Aggiungi
        </Button>
      </HStack>

      <List spacing={2}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <HStack justify="space-between">
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              >
                <Text as={todo.completed ? "del" : undefined}>{todo.title}</Text>
              </Checkbox>
              <IconButton
                aria-label="Rimuovi"
                icon={<DeleteIcon />}
                size="sm"
                colorScheme="red"
                onClick={() => removeTodo(todo.id)}
              />
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}