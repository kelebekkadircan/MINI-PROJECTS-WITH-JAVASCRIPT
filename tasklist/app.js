// Define UI variables

const form = document.querySelector('#task-form'); // form kısmı giriş top 
const taskList = document.querySelector('.collection'); // ul tamamı
const clearBtn = document.querySelector('.clear-tasks'); //button
const filter = document.querySelector('#filter'); // input
const taskInput = document.querySelector('#task'); // input

// load all event listeners 
loadEventListeners();

function loadEventListeners()
{   // dom load event
    document.addEventListener('DOMContentLoaded',getTasks); 
    //add task event
    form.addEventListener('submit',addTask);
    //remove task event
    taskList.addEventListener('click',removeTask);
    //clear task event 
    clearBtn.addEventListener('click',clearTasks);
    //filter tasks event 
    filter.addEventListener('keyup',filterTask);
}

// get tasks from ls
function getTasks()
{ 
    let tasks ; 
    if(localStorage.getItem('tasks') === null)
    { 
        tasks = [];

    }
    else
    { 
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }    

    tasks.forEach(function(task) {
        // create li element 
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// create text node and append to li 
li.appendChild(document.createTextNode(task));
// create new link element 
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content';
// add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li 
li.appendChild(link); 

//append li to ul 
taskList.appendChild(li);
        

    });
}


// add task 
function addTask(e)     
{ 
    if(taskInput.value === '') 
    {
        alert('ADD A TASK');
    }   

    // create li element 
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// create text node and append to li 
li.appendChild(document.createTextNode(taskInput.value));
// create new link element 
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content';
// add icon html 
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li 
li.appendChild(link); 

//append li to ul 
taskList.appendChild(li);
//store in ls
storeTaskLocalStorage(taskInput.value);

// clear input
taskInput.value='';



    e.preventDefault();
}
//store task
function storeTaskLocalStorage (task) 
{ 
    let tasks ; 
    if(localStorage.getItem('tasks') === null)
    { 
        tasks = [];

    }
    else
    { 
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}



//remove task 

function removeTask(e) 
{
if(e.target.parentElement.classList.contains('delete-item'))
{
    if(confirm('Are you sure ? '))
    {
        e.target.parentElement.parentElement.remove();

        // remove from ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}    
}
// remove from local storage 

function removeTaskFromLocalStorage(taskItem)
{
    let tasks ; 
    if(localStorage.getItem('tasks') === null)
    { 
        tasks = [];

    }
    else
    { 
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskItem.textContent === task)
        { 
            tasks.splice(index, 1);
        }
    }); 

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// clear tasks

function clearTasks()
{   
    /* if(confirm('Are you sure ? ')){
        taskList.innerHTML=''; 
     } */
    // faster

    if(confirm('Are you sure ? ')){
        while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild);
    }

    }

    // clear from local storage

    clearTasksFromLocalStorage();

}
// clear tasks from local storage
function clearTasksFromLocalStorage()
{ 
    localStorage.clear();
}

// filter task 

function filterTask(e)
{ 
    const text = e.target.value.toLowerCase();

    
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1)
        { 
            task.style.display = 'block';
        }
        else{ 
            task.style.display = 'none';

        }
    });

    e.preventDefault();
}



