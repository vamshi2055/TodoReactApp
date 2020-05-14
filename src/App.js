import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import axios from "axios";
class App extends React.Component {
  getId = () => {
    const min = 1;
    const max = 100;
    const rand = Math.round(min + Math.random() * (max - min));
    return rand;
  };

  state = {
    todos: [],
    /*  {
        id: this.getId(),
        title: "Go to Movie",
        completed: false,
      },
      {
        id: this.getId(),
        title: "Complete the course",
        completed: false,
      },
      {
        id: this.getId(),
        title: "Office Work",
        completed: false,
      },
      */
  };

  componentDidMount = () => {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  };
  markComplete = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    console.log("in add todo", title);
    const newTodo = {
      id: this.getId(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });

    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  deleteItem = (id) => {
    console.log("in delete", {id});
    
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
    console.log("after", this.state.todos);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteItem={this.deleteItem}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
