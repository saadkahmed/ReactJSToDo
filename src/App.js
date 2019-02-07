import React, { Component } from 'react';
import Header from './components/header';
import Todos from "./components/Todos"
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id:0,
        item:"take out the trash",
        status: false
      },
      {
        id:1,
        item:"do homework",
        status:false
      },
      {
        id:2,
        item:"take out the other piece of trash",
        status:false
      }
    ]
  }

  markcomplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.status=!todo.status;
      }return todo
})})
  }

  delTodo = (id) => {
   this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos markcomplete={this.markcomplete} delTodo={this.delTodo} Todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
