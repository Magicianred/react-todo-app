import _ from 'lodash';
import React from 'react';
import TodoListItem from './todo-list-item';

export default class TodoList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todoData');

        return _.map(this.props.todoData, (todo, index) =>
            <TodoListItem key={index} {...todo} {...props}/>
        )
    }

    render() {
        return (
            <ul className="todo-list">
                {this.renderItems()}
            </ul>
        );
    }
}
