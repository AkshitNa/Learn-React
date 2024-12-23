import './App.css'

import React, { useState } from 'react';

import {useDispatch, useSelector} from "react-redux";
import { addTodo, removeTodo } from './Redux/Slices/Todo';

import CounterTwo from './CounterTwo';

function TodoApp() {

  const [todo, setTodo] = useState("Exercise");

  const todos = useSelector(state => state.TodosReducer.todos);
  const dispatch = useDispatch();

  //Functions To Handle Todos

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo(todo));  //action.payload = todo
      setTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <CounterTwo/>

      <input 
        type="text" 
        value={todo} //todo => from useState()
        onChange={(e) => setTodo(e.target.value)} 
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
