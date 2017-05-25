import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
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

    onEditClick() {
         this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false, error: null });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;

        const validateResult = this.validateInput(newTask, oldTask);

        if (validateResult) {
            this.setState({ error: validateResult });
        } else {
            this.setState({ error: null });
            this.props.saveTask(oldTask, newTask);
            this.setState({ isEditing: false })
        }
    }

    validateInput(newTask, oldTask) {
        if (!newTask) {
            return 'Please enter a task!';
        } else if (_.find(this.props.todoData, todo => todo.task === newTask) && newTask != oldTask) {
            return 'Task already exists!';
        } else {
            return null;
        }
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        if (this.state.isEditing) {
            return (
                <form className="todo-item__edit-form" onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={task} ref="editInput"
                        placeholder="Enter a new task"/>
                    {this.renderError()}
                </form>
            )
        } else {

            let todoItemClassName = 'todo-item__task';
            if (isCompleted) {
                todoItemClassName += ' todo-item__task--done';
            }

            return (
                <span className={todoItemClassName}
                    onClick={this.props.toggleTask.bind(this, task)}>
                    {task}
                </span>
            )

        }
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <div className="todo-item__actions">
                  <i className="fa fa-check" aria-hidden="true"
                     onClick={this.onSaveClick.bind(this)}></i>
                  <i className="fa fa-ban" aria-hidden="true"
                     onClick={this.onCancelClick.bind(this)}></i>
                </div>
            );
        }

        return (
            <div className="todo-item__actions">
                <i className="fa fa-pencil"
                    aria-hidden="true"
                    onClick={this.onEditClick.bind(this)}></i>
                <i className="fa fa-trash"
                    aria-hidden="true"
                    onClick={this.props.deleteTask.bind(this, this.props.task)}></i>
            </div>
        );
    }

    render() {
        return (
            <li className='todo-item'>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </li>
        );
    }
}
