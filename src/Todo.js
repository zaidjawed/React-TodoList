import React , { Component } from 'react'
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  toggleForm(e) {
    this.setState({ isEditing: !this.state.isEditing });
    console.log(e);
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({isEditing: false});
  }

  handleChange(evt){
    this.setState({
      [evt.target.name] : evt.target.value
    });
  }

  handleToggle(evt){
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;
    if(this.state.isEditing){
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChange}
             />
            <button>SAVE</button>
          </form>
        </div>
        )
      }
      else {
        result = (
          <div className="Todo">
            <li
              onClick={this.handleToggle}
              className={this.props.completed ? "Todo-task completed" : "Todo-task"}>
              {this.props.task}
            </li>
            <div className="Todo-buttons">
              <button onClick={this.toggleForm}><i class="fas fa-pen"></i></button>
              <button onClick={this.handleRemove}><i class="fas fa-trash"></i></button>
            </div>
          </div>
          )
        }
        return result;
    }
  }


export default Todo;
