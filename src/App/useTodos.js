import React from 'react';
import { useLocalStorage } from './useLocalStorage';


function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  let searchedTodos=[];
  if(!searchValue.length>=1){
    searchedTodos=todos;
  }else{searchedTodos=todos.filter(todo=>{const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);});}

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      sincronizeTodos,
    };
}

export { useTodos };