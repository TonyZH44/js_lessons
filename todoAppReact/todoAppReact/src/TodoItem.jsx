
export default function TodoItem({id, text, completed, onDestroy, onToggle }) {

    if (!completed){
        completed = "";
    } else  {
        completed = "completed"
    }

    //const key = Date.now();

    return (
        <li id={id}
             className= {completed}
            //     editing: this.props.editing
             
            >
            <div className="view">
                <input id={id}
                    className="toggle"
                    type="checkbox"
                    checked={completed}
                    onChange={onToggle}
                />
                <label //onDoubleClick={this.handleEdit}
                >
                    {text}
                </label>
                <button id={id} className="destroy" onClick={onDestroy} 
                />
            </div>
            <input
                //ref="editField"
                className="edit"
                //value={this.state.editText}
                //onBlur={this.handleSubmit}
                //onChange={this.handleChange}
                //onKeyDown={this.handleKeyDown}
            />
        </li>
    )
}