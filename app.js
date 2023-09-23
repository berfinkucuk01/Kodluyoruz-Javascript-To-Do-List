const taskDOM = document.getElementById('task');
const taskListDOM = document.getElementById('list');
const alertDOM = document.getElementById('alert');
const taskButton = document.getElementById('liveToastBtn');
const deleteButton=document.querySelector('.delete-task')

taskButton.addEventListener('click', newElement);

function newElement(e) {
  e.preventDefault();
  const taskValue = taskDOM.value; 
  if (taskValue === '') { 
    showToast('Listeye boş ekleme yapamazsınız!', 'danger');
  } else {
    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskValue} <button type="reset" class="delete-task" onclick="deleteTask(this)">X</button>`; 
    taskListDOM.appendChild(newTask);
    showToast('Listeye ekleme yapıldı!', 'success');
    localStorage.setItem('task', taskValue);
    localStorage.getItem('task')
    taskDOM.value = '';
    
  }
}

function showToast(message, type) {
  alertDOM.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  `;
}

taskListDOM.addEventListener('click', clickTask);

function clickTask(event) {
  const clickedTask = event.target;
  if (clickedTask.tagName === 'LI') {
    clickedTask.classList.add('checked');
    showToast('Görev Tamamlandı!','success')
  }
}

deleteButton.addEventListener('click',deleteTask)
function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
  showToast('Görev silindi.', 'danger');
}








 










