import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }

    onEditClick() {
         this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false })
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        if (this.state.isEditing) {
            return (
                <input type="text" defaultValue={task} ref="editInput" />
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
                  <i className="fa fa-times" aria-hidden="true"
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
