import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { Modal } from "../Modal";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoHeader } from "../TodoHeader";



function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
} = useTodos();

return (
  <React.Fragment>
    <TodoHeader loading={loading}>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={()=> <TodosError />}
        onLoading={()=> <TodosLoading />}
        onEmptyTodos={()=> <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText} </p> 
          }>
          {todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          )}
    </TodoList>

      

    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />
      {openModal && (
        <Modal>
          <TodoForm 
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}
  </React.Fragment>
);;
}

export default App;