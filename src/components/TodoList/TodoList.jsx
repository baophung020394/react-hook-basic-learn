import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Page from './Page';
import './Todolist.scss';

function TodoList() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' },
  ]);

  const onClickRemove = (td, idx) => {
    const index = todoList.findIndex((x) => x.id === td.id);
    console.log(index);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const Add = (values) => {
    console.log('values', values);
    const id = Math.floor(Math.random() * 16777215);
    const newTodo = {
      id: id,
      ...values
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  return (
    <div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
      <Page todoList={todoList} onClickRemove={onClickRemove} onSubmit={Add} />
    </div>
  );
}

export default TodoList;
