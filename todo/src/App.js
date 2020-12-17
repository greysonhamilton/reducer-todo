import React, { useState, useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, todoReducer } from '../src/reducer/todoReducer';

const App = () => {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTask, changeTask] = useState('');

  const handleChange = (e) => {

    changeTask(e.target.value);

  }

  const completeTask = (id) => {
    
    dispatch({type: 'COMPLETE_TASK', payload: id})

  }

  const filterComplete = () => {

    dispatch({type: 'FILTER_COMPLETE'})

  }

  return (

    <div className="App">
        
      <h2>Welcome to your Todo App!</h2>
      <button onClick = {filterComplete}>Clear Completed Tasks</button>

      <TodoList 
        list={state}
        completeTask={completeTask}
       />

      <TodoForm
        input = {newTask}
        handleChange = {handleChange}
        dispatch = {dispatch}
        changeTask = {changeTask}
       />
        
    </div>

    );

  }

export default App