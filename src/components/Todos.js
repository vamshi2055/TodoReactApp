import React from "react";
import "./Todos.css";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteItem={this.props.deleteItem} markComplete={this.props.markComplete} />
    ));
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
