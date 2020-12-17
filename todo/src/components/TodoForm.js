import React from 'react';

const TodoForm = (props) => {

    const {input, handleChange, dispatch, changeTask} = props;

    return (

        <form onSubmit = {(e) => {
            e.preventDefault();
            dispatch({type: 'ADD_NEW_TASK', payload: input})
            changeTask('')
        }}>
            <input 
                type='text' 
                name='item' 
                id='item' 
                value={input} 
                onChange={handleChange}
                 />
            <button>Add Task</button>
        </form>

    )

}

export default TodoForm