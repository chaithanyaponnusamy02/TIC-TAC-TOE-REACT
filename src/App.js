import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleAddTask = () => {
    const { tasks, input } = this.state;
    if (input.trim()) {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false // This can be used for marking tasks as completed
      };
      this.setState({
        tasks: [...tasks, newTask],
        input: '' // Clear input field after adding
      });
    }
  }

  handleDeleteTask = (taskId) => {
    const { tasks } = this.state;
    this.setState({
      tasks: tasks.filter(task => task.id !== taskId)
    });
  }

  render() {
    const { tasks, input } = this.state;

    return (
      <body>
        
     
      <div className="App">
        <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={this.handleInputChange}
          placeholder="Enter a task"
        />
        <button className="add" onClick={this.handleAddTask}>Add Task</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button className="button"onClick={() => this.handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </body>
    );
  }
}

export default App;