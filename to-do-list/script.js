function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (input.value.trim() === '') return;
    
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = input.value;
    
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';
    
    const tickBtn = document.createElement('button');
    tickBtn.innerHTML = '&#10003;'; // Unicode checkmark
    tickBtn.className = 'tick-btn';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#10007;'; // Unicode X mark
    deleteBtn.className = 'delete-btn';
    
    buttonGroup.appendChild(tickBtn);
    buttonGroup.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(buttonGroup);
    taskList.appendChild(li);
    
    input.value = '';
    
    tickBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
        taskText.classList.toggle('completed');
    });
    
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
