

export default function TodoInput({onKeyDown, onBlur}) {

    return (
        <div>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus={true}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
            />
        </div>
    );
}
