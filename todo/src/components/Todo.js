import React from 'react';

const Todo = (props) => {

    const {id, task, completed, checkOffTask} = props;

    return (

        <div>
            <h2 style={this.props.completed ? { textDecoration: 'line-through' } : null} onClick={() => this.props.markComplete}></h2>
        </div>
       
    )

}

export default Todo