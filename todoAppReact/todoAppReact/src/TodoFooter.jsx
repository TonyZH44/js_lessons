

export default function TodoFooter() {

    // if (this.props.completedCount > 0) {
    //     clearButton = (
    //         <button
    //             className="clear-completed"
    //             onClick={this.props.onClearCompleted}>
    //             Clear completed
    //         </button>
    //     );
    // }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>0</strong> item/items left
            </span>
            <ul className="filters">
                <li>
                    <a
                        //href="#/"
                        //className={classNames({ selected: nowShowing === app.ALL_TODOS })}
                        >
                        All
                    </a>
                </li>
                {' '}
                <li>
                    <a
                        //href="#/active"
                        //className={classNames({ selected: nowShowing === app.ACTIVE_TODOS })}
                        >
                        Active
                    </a>
                </li>
                {' '}
                <li>
                    <a
                        //href="#/completed"
                        //className={classNames({ selected: nowShowing === app.COMPLETED_TODOS })}
                        >
                        Completed
                    </a>
                </li>
            </ul>
            
        </footer>
    )
}