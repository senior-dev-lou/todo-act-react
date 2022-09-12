import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import TodoList from "./components/todo-list.component";

const App = () => {
  const [getTodoList, setTodoList] = useState([
    { id: uuidv4(), todo: 'A simple task', completed: true, isEditing: false },
    { id: uuidv4(), todo: 'Another simple task', completed: false, isEditing: false }
  ]);

  const handleAdd = (ref) => {
    setTodoList([...getTodoList, { id: uuidv4(), todo: ref.current.value, completed: false, isEditing: false }]);
  }
  const handleDelete = (id) => {
    setTodoList(getTodoList.filter((item) => item.id !== id));

  }
  const handleUpdate = (data) => {
    setTodoList(getTodoList.map((item) => {
      if (data.id === item.id) {
        item.todo = data.ref.current.value;
        item.isEditing = false;
      }
      return item;
    }))
  }
  const handleCancelUpdate = (id) => {
    setTodoList(getTodoList.map((item) => {
      if (item.id === id) {
        item.isEditing = false;
      }
      return item;
    }))
  }
  const handleComplete = (id) => {
    setTodoList(getTodoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    }));

  }
  const handleEdit = (id) => {
    setTodoList(getTodoList.map((item) => {
      if (item.id === id) {
        item.isEditing = true
      }
      return item;
    }));
  }

  return <TodoList
    todoList={getTodoList}
    onAddTodo={handleAdd}
    onDeleteTodo={handleDelete}
    onUpdateTodo={handleUpdate}
    onComplete={handleComplete}
    onEditTodo={handleEdit}
    onCancelUpdate={handleCancelUpdate}
  />
};

export default App;
