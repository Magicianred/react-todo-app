import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todoData = [
    {
        task: 'Finish doing some stuff',
        isCompleted: true
    },
    {
        task: 'Pack my things',
        isCompleted: false
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoData
        }
    }

    createTask(task) {
        this.state.todoData.push({
            task,
            isCompleted: false
        });
        this.setState({ todoData: this.state.todoData });
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todoData, todo => {
            return todo.task === task;
        });

        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todoData: this.state.todoData });
    }

    render() {
        return (
            <div>
                <h1>React To-Do App</h1>
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodoList
                    todoData={this.state.todoData}
                    toggleTask={this.toggleTask.bind(this)}
                />
            </div>
        );
    }
}
