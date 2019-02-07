import React, { Component } from 'react';

export class TodoItem extends Component {

    completed = () => {
        return {
            padding: '5px',
            margin: '5px',
            borderBottom : '1px',
            textDecoration: this.props.todo.status ? "line-through" : "none"
        }
    }

    render() {
        return (
                <h3 style={this.completed()}><input type="checkbox" onChange={this.props.markcomplete.bind(this, this.props.todo.id)}></input>{" "}{this.props.todo.item}
                <button onClick={this.props.delTodo.bind(this, this.props.todo.id)} style={btnStyle}>X</button>
                </h3>
                );
    }
}
const btnStyle = {
    float:'right',
}

export default TodoItem;