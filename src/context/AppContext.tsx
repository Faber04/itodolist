import { createContext, useEffect, useState } from "react";
import { ITodo, AppContextType, AppProviderProps } from "../types/types";

export const AppContext = createContext<AppContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const LOCAL_STORAGE = "itodos:data";
  const initialData : ITodo[] = (() => {
    if (typeof window === "undefined") return [];
    const ls = localStorage.getItem(LOCAL_STORAGE);
    return ls ? JSON.parse(ls) : [];
  })();
  const [todos, setTodos] = useState<ITodo[]>(initialData);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newToDo: ITodo = {
      id: Date.now(),
      title: text,
      completed: false,
    };
    setTodos([...todos, newToDo]);
  };

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
