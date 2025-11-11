import { ReactNode } from "react";

export interface ITodo{
    id:number,
    title:string,
    completed:boolean
}

interface ITodoProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface AppContextType extends ITodoProps {
  todos: ITodo[];
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

export interface IToDoListProps  extends ITodoProps{
  todos: ITodo[];
}

export interface IToDoListItemProps extends ITodoProps {
  todo: ITodo;
}

export interface IToDoModalProps {
  isOpen: boolean, 
  onClose: () => void,
  newTitle: string, 
  setNewTitle : (title:string) => void, 
  handleAdd : () => void
}