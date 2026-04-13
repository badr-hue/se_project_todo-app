class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    
    }

    _setEventListeners() {
   /*    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
      const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn"); 
 */
      this._todoCheckboxEl.addEventListener("change", () => {
        this._data.completed = !this._data.completed;
      });

      this._todoDeleteBtn.addEventListener("click", () => {
        this._todoElement.remove();
      }); 
    }

    _generateCheckboxEl(){

      this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
      this._todoLabel = this._todoElement.querySelector(".todo__label");
       this._todoCheckboxEl.checked = this._data.completed;
      this._todoCheckboxEl.id = `todo-${this._data.id}`;
      this._todoLabel.setAttribute("for", `todo-${this._data.id}`); 

    }

    getView() {
        this._todoElement = this._templateElement.content.querySelector(".todo").cloneNode(true);
      const todoNameEl = this._todoElement.querySelector(".todo__name");
      
      const todoDate = this._todoElement.querySelector(".todo__date");
      const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");    
      
      todoNameEl.textContent = this._data.name;
         const dueDate = new Date(this._data.date);
        if (!isNaN(dueDate)) {
            todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            })}`;
        }
      this._generateCheckboxEl();
      this._setEventListeners();  
      return this._todoElement;
    } 

    generateTodo() {
      const todoElement = document
        .querySelector(this._templateElement)
        .content.querySelector(".todo")
        .cloneNode(true);
      const { todoNameEl, todoCheckboxEl, todoLabel, todoDate, todoDeleteBtn } = this.getView();   

      todoNameEl.textContent = this._data.name;
      todoCheckboxEl.checked = this._data.completed; 
      // Apply id and for attributes.
      // The id will initially be undefined for new todos.
      todoCheckboxEl.id = `todo-${this._data.id}`;
      todoLabel.setAttribute("for", `todo-${this._data.id}`);        
        // If a due date has been set, parsing this it with `new Date` will return a
        // number. If so, we display a string version of the due date in the todo.
     

        todoDeleteBtn.addEventListener("click", () => {
            this.element.remove();
        });

        return todoElement;
    }
}


export default Todo;