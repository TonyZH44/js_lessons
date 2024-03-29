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
                if (target.parentElement.className == "completed"){
                    target.parentElement.className = "active";
                    text = target.parentElement.querySelector('.todo_task');
                    text.outerHTML = `<span class="todo_task">${text.innerText}</span>`;
                    save();
                    if (document.querySelector('.todo_states').value == "all") break;
                    target.parentElement.style.display = "none"
                    break;
                }
                target.parentElement.className = "completed";
                text = target.parentElement.querySelector('.todo_task');
                //console.log(text);
                //console.log(text.innerHTML);
                //console.log(text.innerText);
                //console.log(text.outerHTML);
                text.outerHTML = `<span class="todo_task"><del>${text.innerText}</del></span>`;
                save();
                if (document.querySelector('.todo_states').value == "all") break;
                target.parentElement.style.display = "none"
                break;
            case 'btn_action_restore':
                target.parentElement.className = "active";
                text = target.parentElement.querySelector('.todo_task');
                text.outerHTML = `<span class="todo_task">${text.innerText}</span>`;
                save();
                if (document.querySelector('.todo_states').value == "all") break;
                target.parentElement.style.display = "none"
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


    app.addEventListener('dblclick', (event) => {
        if (event.target.className == "todo_task" 
            && event.target.parentElement.className == "active"){

                task_value = event.target.innerText;
                console.log(task_value);
                parent = event.target.parentElement;

                event.target.outerHTML = `<input class="todo_edit">`;
                input = parent.querySelector('.todo_edit');
                input.value = task_value;
                input.focus();

                input.addEventListener('keydown', (event_keydown) =>{
                    const keyName = event_keydown.key;

                    if (keyName === 'Enter') {
                        input.outerHTML = `<span class="todo_task">${input.value}</span>`;
                    } 
                    
                })

                input.addEventListener('blur', (event_blur) =>{
                    input.outerHTML = `<span class="todo_task">${input.value}</span>`;
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

function save(){//доделать
    let list = document.querySelector('.todo_list').childNodes;
    for (let item of list){
        item_class = item.className;
        item.querySelector('.todo_task')
    }
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
        <button class="btn_action_complete">C</button>
        <span class="todo_task">${str}</span>
        <button class="btn_action_delete">X</button>
        </li>`;
}

//<button class="btn_action_restore">R</button>

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
