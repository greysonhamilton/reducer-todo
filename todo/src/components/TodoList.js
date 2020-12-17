import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {

    return (

        <div>
            <ul className="todoList">
                {props.list.map((item) => (<Todo key={item.id+1} id={item.id} task={item.item} completed={item.completed} checkOffTask={props.completeTask} />))}
            </ul>
        </div>
    )
}

export default TodoList