document.addEventListener('DOMContentLoaded', function(){
    const taskForm = document.getElementById('task-form');
    if(taskForm){
        console.log("taskForm");
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
            completeButton.textContent = `✓`;
            completeButton.addEventListener('click', () => {
                console.log("complete");
                listItem.classList.toggle('completed');
            })

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-btn';
            removeButton.textContent = `X`;
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

    const calculator = document.getElementById('calculator');
    if(calculator){
        console.log("calculator");

        let currentExpression = '';

        const calcNumberBtn = document.getElementsByClassName('calcNumber');
        for(let i = 0; i < calcNumberBtn.length; i++) {
            calcNumberBtn[i].addEventListener('click', function (e) {
                e.preventDefault();
                console.log(calcNumberBtn[i].innerHTML);
                currentExpression += calcNumberBtn[i].innerHTML;
                document.getElementById('calcResult').value = currentExpression;
            })
        }

        const calcEqualBtn = document.getElementById('calcEqual');
        calcEqualBtn.addEventListener('click', function (e) {
            e.preventDefault();
            try{
                currentExpression = eval(currentExpression.replace('÷', '/').replace('x', '*'));
                document.getElementById('calcResult').value = currentExpression;
            } catch{
                document.getElementById('calcResult').value = 'Error';
            }
        })

        const calcClearBtn = document.getElementById('calcClear');
        calcClearBtn.addEventListener('click', function (e) {
            e.preventDefault();
            currentExpression = '';
            document.getElementById('calcResult').value = currentExpression;
        })

    }
})