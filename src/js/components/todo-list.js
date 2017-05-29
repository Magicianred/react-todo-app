import _ from 'lodash';
import React from 'react';
import TodoListItem from './todo-list-item';

export default class TodoList extends React.Component {
    renderItems() {
        return _.map(this.props.todoData, (todo, index) =>
            <TodoListItem key={index} {...todo} {...this.props}/>
        )
    }

    renderList() {
        if (this.props.todoData.length === 0) {
            return (
                <div className="no-items">
                    <i className="fa fa-file-text-o" aria-hidden="true"></i>
                    <span>No tasks</span>
                </div>
            )
        } else {
            return (
                <ul className="todo-list">
                    {this.renderItems()}
                </ul>
            )
        }
    }

    render() {
        return this.renderList();
    }
}

