import { DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, IconButton, List, ListItem, Text } from "@chakra-ui/react";
import { IToDoListProps } from "../../types/types";

function ToDoList({removeTodo, toggleTodo, todos}:IToDoListProps) {
  return (
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
  );
}

export default ToDoList;
