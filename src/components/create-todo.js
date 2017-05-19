import React from 'react';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    renderError() {
        if (!this.state.error) {
            return null;
        } else {
            return (
                <span className='new-task__error'>
                    {this.state.error}
                </span>
            )
        }
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateResult = this.validateInput(task);

        if (validateResult) {
            this.setState({ error: validateResult });
        } else {
            this.setState({ error: null });
            this.props.createTask(task);
            this.refs.createInput.value = '';
        }
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task!';
        } else if (_.find(this.props.todoData, todo => todo.task === task)) {
            return 'Task already exists!';
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className='new-task'>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="What do I need to do?" ref="createInput"/>
                    <button type="submit" className="new-task__submit">Create</button>
                    {this.renderError()}
                </form>
            </div>
        );
    }
}
