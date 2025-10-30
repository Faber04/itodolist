import { createContext, useState } from "react";
import { ITodo, AppContextType, AppProviderProps } from "../types/types";

export const AppContext = createContext<AppContextType>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const LOCAL_STORAGE = 'itodos:data';
  const ls = localStorage.getItem(LOCAL_STORAGE);
  const initialData = ls ? JSON.parse(ls) : [];
  const [todos, setTodos] = useState<ITodo[]>(initialData);

  const addTodo = (text:string) => {
    const newToDo : ITodo = {
        id: Date.now(),
        title: text,
        completed: false
    };
    const allTodos = [...todos, newToDo];
    saveData(allTodos);
  }

  const toggleTodo = (id: number) => {
    const toggledTodo = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed} : todo);
    saveData(toggledTodo);
  };

  const removeTodo = (id: number) => {
    const todoCleaned = todos.filter((todo) => todo.id !== id);
    saveData(todoCleaned);
  };

  const saveData = (_todos:ITodo[]) => {
    setTodos(_todos);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(_todos));
  }

  return (
    <AppContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </AppContext.Provider>
  );
};
