import React from 'react';

export default class CreateTodo extends React.Component {
    handleCreate(event) {
        event.preventDefault();

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }
}
