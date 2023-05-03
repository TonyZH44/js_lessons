

function todoInput() {

    return (
        <div>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={this.state.newTodo}
                onKeyDown={this.handleNewTodoKeyDown}
                onChange={this.handleChange}
                autoFocus={true}
            />
        </div>
    );
}