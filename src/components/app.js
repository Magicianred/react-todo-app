import React from 'react';
import TodoList from './todo-list';

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

    render() {
        return (
            <div>
                <h1>React To-Do App</h1>
                <TodoList todoData={this.state.todoData}/>
            </div>
        );
    }
}
