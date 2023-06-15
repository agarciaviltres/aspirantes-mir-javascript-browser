(function(){
  // Variables
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
    let tasks = [];
    var score = 0;

  // Funciones
  var agregarTarea = function(){
    score++;
    var tarea = tareaInput.value,
      nuevaTarea = document.createElement("li");

    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
      tareaInput.className = "error";
      return false;
    }

    const task = {
      id: new Date().getTime(),
      name: tarea,
      completed: false
    };

    nuevaTarea.setAttribute("id", task.id);

    const taskElMarkup = ` 
  <div class="checkbox-wrapper"> 
  <input type="checkbox" id="${task.name}-${task.id}" name="tasks" ${
      task.completed ? "checked" : ""
    }> 
  <label for="${task.name}-${task.id}"> 
  </label> 
  <span ${!task.completed ? "contenteditable" : ""}>${task.name}</span> 
  </div> `;
  //<button class="remove-task" title="Remove ${task.name} task">X</button>
  nuevaTarea.innerHTML = taskElMarkup;
  lista.appendChild(nuevaTarea);


    tasks.push(task);


    // Agregamos el contenido al enlace
    //enlace.appendChild(contenido);
    // Le establecemos un atributo href
    //enlace.setAttribute("href", "#");
    // Agrergamos el enlace (a) a la nueva tarea (li)
    //nuevaTarea.appendChild(checkbox);
    //nuevaTarea.appendChild(task);
    //nuevaTarea.appendChild(addDeleteBtn());

    // Agregamos la nueva tarea a la lista
    //lista.appendChild(nuevaTarea);

    tareaInput.value = ""

  };
  var comprobarInput = function(){
    if (score === 0) {
      addDeleteBtn();
    }

    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Ingresa tu nueva tarea");
  };

  var eliminarTarea = function(){
      var items = lista.children;
      var box = document.getElementsByName('tasks');
      let taskRemove = []
      for(i = 0; i < items.length; i++) {
        if (box[i].checked === true){
          taskRemove.push(items[i].id);
          //items[i].parentNode.removeChild(items[i]);
        }
      }
      for(k = 0; k < taskRemove.length; k++) {  
        for(j = 0; j < items.length; j++) {
          if (taskRemove[k] === items[j].id) {      
            items[j].parentNode.removeChild(items[j]);
          }
        }
      }
  };

  var addDeleteBtn = function(){
    divDelete = document.getElementById("delete-btn");
    const deleteBtn = document.createElement("button");
    
    deleteBtn.textContent = "Delete all done";
    deleteBtn.className = "btn-delete";
    deleteBtn.id = "btn-delete";

    divDelete.appendChild(deleteBtn);
  };

  var updateTask = function(taskId, el) {
  // 1 
  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (el.hasAttribute("contentEditable")) {
    // 2 
    task.name = el.textContent;
  } else {
    // 3 
    const span = el.nextElementSibling.nextElementSibling;
    task.isCompleted = !task.isCompleted;
    if (task.isCompleted) {
      span.removeAttribute("contenteditable");
      el.setAttribute("checked", "");
    } else {
      el.removeAttribute("checked");
      span.setAttribute("contenteditable", "");
    }
  }
}

  // Eventos

  // Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);
  tareaInput.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
  });
  // Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  lista.addEventListener("input", (e) => {
  const taskId = e.target.closest("li").id;
  updateTask(taskId, e.target);
  var botonBorrar = document.getElementById("btn-delete");
  botonBorrar.addEventListener("click", eliminarTarea);

  });  

}());

