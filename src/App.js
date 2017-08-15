import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <li> { this.props.task } </li>
        )
    }
}

class TodoForm extends React.Component {
    constructor() { 
        super();
        this.state = {
            task: ''
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            task: value
        })
    }

    handleClick(onSubmit, value) {
        onSubmit(value);
        this.setState({
            task: ''
        });
    }

    render() {
        return (
            <div>
                {/*<input value={this.state.task}
                       onChange={(e) => this.handleChange(e.target.value) } />*/}
                <input value={this.state.task}
                       onChange={function(e) {
                           return this.handleChange(e.target.value);
                       }.bind(this || undefined)} />
                <button onClick={( ) => this.handleClick(this.props.onSubmit, this.state.task)}>Submit</button>
            </div>
        )
    }
}

export default class TodoList extends React.Component {
    constructor() { 
        super(); 
        this.state = {
            'todoList': [
                { task: '청소하기' },
                { task: '일하기' }, 
                { task: '저녁먹기'}
            ]
        }
    }

    handleSubmit(task) {
        this.setState({
            todoList: [
                ...this.state.todoList, 
                { task: task }
            ]
        })
    }

    renderTodos() {
        return this.state.todoList.map(
            (todo, index) => <Todo key={index} task={todo.task} />
        )
    }

    render() {
        return (
            <div>
                <h2>TODO LIST</h2>
                <TodoForm onSubmit={(val) => this.handleSubmit(val)} />
                <ul>{this.renderTodos()}</ul>
            </div>
        )
    }
}