document.addEventListener('DOMContentLoaded', function(){
    const taskForm = document.getElementById('task-form');
    if(taskForm){
        taskForm.addEventListener('submit', function(e){
            e.preventDefault();
            console.log("pressed");

            const taskText = document.getElementById('taskInput').value;

            if(taskText === ''){
                alert("Please enter a task");
                return;
            }

            const taskList = document.getElementById('taskList');

            const listItem = document.createElement('li');
            listItem.className = 'task';
            listItem.innerHTML = `
            <p>${taskText}</p>`;

            const completeButton = document.createElement('button');
            completeButton.className = 'complete-btn';
            completeButton.textContent = `V`;
            completeButton.addEventListener('click', () => {
                console.log("complete");
                listItem.classList.toggle('completed');
            })

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn';
            removeButton.textContent = `Remove`;
            removeButton.addEventListener('click', () => {
                console.log("removed");
                taskList.removeChild(listItem);
            })


            /** .append accepts Node objects and DOMStrings while .appendChild accepts only Node objects ; append accepts multiple items**/
            //listItem.appendChild(completeButton);
            //listItem.appendChild(removeButton);
            listItem.append(completeButton, removeButton);

            taskList.append(listItem);

            taskForm.reset();
        })
    }
})