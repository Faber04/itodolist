import { createContext, useState } from "react";
import { ITodo, AppContextType, AppProviderProps } from "../types/types";

export const AppContext = createContext<AppContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text:string) => {
    const newToDo : ITodo = {
        id: Date.now(),
        title: text,
        completed: false
    };
    setTodos([...todos, newToDo]);
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <AppContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </AppContext.Provider>
  );
};
