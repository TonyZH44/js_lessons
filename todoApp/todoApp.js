function initActions(){

    load();

    let app = document.querySelector('.todo');
    app.addEventListener('click', (event) => {
        let target = event.target;
        switch(target.className) {
            case 'btn_action_delete':
                target.parentElement.remove();
                save();
                break;
            case 'btn_add':
                addTask();
                save();
                break;
            case 'btn_action_complete':
                target.parentElement.className = "completed";
                text = target.parentElement.querySelector('.todo_task');
                text.innerHTML = `<span class="todo_task"><del>${text.innerText}</del></span>`;
                save();
                if (document.querySelector('.todo_states').value == "all") break;
                target.parentElement.style.display = "none"
                break;
            case 'btn_action_restore':
                target.parentElement.className = "active";
                text = target.parentElement.querySelector('.todo_task');
                text.innerHTML = `<span class="todo_task">${text.innerText}</span>`;
                save();
                if (document.querySelector('.todo_states').value == "all") break;
                target.parentElement.style.display = "none"
                break;
            case 'todo_edit':
                //Доделать
                break;
        }
    })
    let todo_text = document.querySelector('.todo_text');
    todo_text.addEventListener('keydown', (event) => {
        const keyName = event.key;

        if (keyName === 'Enter') {
            addTask();
            save();
        } 
    })

    todo_text.addEventListener('blur', (event) => {
        addTask();
        save();
    })

    //Доделать 
    app.addEventListener('dblclick', (event) => {
        if (event.target.className == "todo_task" 
            && event.target.parentElement.className == "active"){

                task_value = event.target.value;

                event.target.outerHTML = `<input class="todo_edit">`;
                event.target.value = task_value;
                event.target.focus();

                event.target.addEventListener('blur', () =>{
                    event.target.innerHTML = `<span class="todo_task">${event.target.value}</span>`;
                })

        }
    })


}

function load(){
    const fromStorage = localStorage.getItem('todo_list');
    if (fromStorage) {
        document.querySelector('.todo_list').innerHTML = fromStorage;
    }
}

function save(){
    localStorage.setItem('todo_list', document.querySelector('.todo_list').innerHTML);
}

function addTask(){

    let text = document.getElementsByClassName("todo_text")[0].value;

    if (!isEmpty(text)){
        document.querySelector('.todo_list').insertAdjacentHTML('beforeend', create(text));
        document.getElementsByClassName("todo_text")[0].value = '';
    }
}

function isEmpty(str) {
    return !str.trim().length;
}


function create(str){
    return `<li id="${str}" class="active">
        <span class="todo_task">${str}</span>
        <button class="btn_action_restore">restore</button>
        <button class="btn_action_complete">complete</button>
        <button class="btn_action_delete">X</button>
        </li>`;
}

function selectOnChange(obj){
    let selected = obj.value;
    let list_items = document.querySelector('.todo_list').childNodes;
    switch(selected){
        case 'active':
            for (let item of list_items) {
                if (item.className == "active"){
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            }
            break;
        case 'completed':
            for (let item of list_items) {
                if (item.className == "completed"){
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            }
            break;
        case 'all':
            for (let item of list_items) {
                item.style.display = '';
            }
            break;
    }
}


initActions();
