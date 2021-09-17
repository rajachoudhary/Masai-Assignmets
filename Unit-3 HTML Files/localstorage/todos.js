let todo = [];
function handleAdd(){
    //retrive input text
    const text = document.getElementById("input").value;
    if(!text){
        alert('type something')
        return;
    }
    const payload = {
        title: text,
        status:false
    }
    todo.push(payload);
    localStorage.setItem("todos",JSON.stringify(todo));
    //update the ui
    const container = document.getElementById("task-list")
    displayTodos(todo, container);

}

function displayTodos(todo, container){
    let ul = document.createElement("ul")
    container.innerHTML = " "
    for (let i = 0; i <todo.length; i++) {
        let li = document.createElement("li")
        li.textContent = `${todos[i]}.title} - ${todos[i].status?"DONE":"pending"}`
        ul.appendChild(li)
    }
    container.append(ul)
}

function handleLoad() {
    const data = JSON.parse(localStorage.getItem("todos"))
    const container = document.getElementById("task-list")
    //* if null, then
    if(data){
        todo = data
        displayTodos(todo, container)
    }
}

window.addEventListener("load",function(){
    const addBtn = document.getElementById("add-btn")
    addBtn.addEventListener("click", handleAdd)

    const  removeBtn = document.getElementById("remove")
    removeBtn.addEventListener("click", handleRemove)

    handleLoad()
})

function(){
    todo = []
    localStorage.setItem("todos",JSON.stringify(todos))
    const container = document.getElementById("task-list")
    container.innerHTML = ""
}