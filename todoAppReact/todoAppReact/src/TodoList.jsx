import TodoItem from "./TodoItem"

export default function TodoList({taskList}) {

    

    return (
        <section className="main">
            <input
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                //onChange={this.toggleAll}
                //checked={activeTodoCount === 0}
            />
            <label
                htmlFor="toggle-all"
            />
            <ul className="todo-list">
                {taskList}
            </ul>
        </section>
    )
}