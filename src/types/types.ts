import { ReactNode } from "react";

export interface ITodo{
    id:number,
    title:string,
    completed:boolean
}

export interface AppContextType {
  todos: ITodo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
