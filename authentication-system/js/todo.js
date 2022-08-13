let addButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//adding the event listener to the button
addButton.addEventListener('click', function(){
    var list = document.createElement('li');
    //paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(list);
    list.innerText = inputField.value;
    inputField.value = '';

    //adding an event listener to cross out an done task
    list.addEventListener('click', function() {
        list.style.textDecoration = 'line-through';
    })

    //adding an event listener to delete the todo list contents
    list.addEventListener('dblclick', function() {
        toDoContainer.removeChild(list);
    })
})