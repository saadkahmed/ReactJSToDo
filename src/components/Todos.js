import React, { Component } from 'react';
import TodoIem from './TodoItem';
import '../App.css';

class Todos extends Component {
  render() {
    return this.props.Todos.map((todo) => (
        <div key={todo.id} style={divstyle}>
            <TodoIem todo={todo} markcomplete={this.props.markcomplete} delTodo={this.props.delTodo}/>            
        </div>
    ));     
  }
}
const divstyle = {
    backgroundColor:"#f4f4f4",
}


export default Todos;