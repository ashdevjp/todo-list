const todoList = [{
  stuff:'Todo' ,
  dueDate:'Date'
  }];
  
  renderTodoList();
  
  function renderTodoList() {
      
    let todoListHTML = '';
  
    todoList.forEach((todoObject,index) => {
      const {stuff, dueDate } = todoObject;
      const html = `
        <div> ${stuff}</div>
        <div> ${dueDate}</div>
        <button class="delete-todo-button 
        js-delete-todo-button" >Delete</button>
        `;
  
      todoListHTML+= html;
    });
    //console.log(todoListHTML)
  
    document.querySelector('.js-todoStuff')
      .innerHTML = todoListHTML;
  
      document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
  
      })
  }
  
  document.querySelector('.js-add-todo-button')
    .addEventListener('click', ()=>{
      addTodo();
    });
  
  function addTodo(){
   const inputElem = document.querySelector('.js-stuff-input');
   const stuff = inputElem.value;
  
   const dateInputElem = document.querySelector('.js-date-input');
   const dueDate = dateInputElem.value;
  
   todoList.push({
    //stuff:stuff,
    //dueDate:dueDate,
    stuff,
    dueDate
   }
   );
   //console.log(todoList);
  
   
   inputElem.value = '';
  
   renderTodoList();
  }
  
  /* SETTIMEOUT FUNC
  function greetUser(name) {
    console.log('Hello ',name);
    
  }
  greetUser('Ash');
  
  setTimeout(()=>{
    
    greetUser('ashh')
  }, 3000);
  */