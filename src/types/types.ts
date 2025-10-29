import { ReactNode } from "react";

export interface ITodo{
    id:number,
    title:string,
    completed:boolean
}

interface ITodoProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface AppContextType extends ITodoProps {
  addTodo: (title: string) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}

export interface ActionButtonProps {
  onOpen: () => void;
}

export interface IHeaderProps {
  children: any;
}

export interface IToDoListProps  extends ITodoProps{}