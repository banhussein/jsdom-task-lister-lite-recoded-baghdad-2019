document.addEventListener("DOMContentLoaded", () => {
  // your code here
      console.log('tasks');


});
let input =document.getElementById('new-task-description');
let list = document.getElementById('tasks');

 function todo(event){
    event.preventDefault();
   let list = document.getElementById('tasks');
   let inputVal = input.value;
    task.innerText = inputVal;
    list.appendChild(task);
    

 }
document.onsubmit = todo;

