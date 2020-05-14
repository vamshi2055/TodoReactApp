import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  render() {
    const { id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        {this.props.todo.title}
        <button style={btnStyle} onClick={this.props.deleteItem.bind(this,id)}>X</button>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "1px #ccc dotted",
  cursor: "pointer",
  float: "right",
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};
export default TodoItem;
