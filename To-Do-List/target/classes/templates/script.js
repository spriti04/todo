// Define the backend API base URL
const API_URL = 'http://localhost:8080/todos';

// Load all todos from backend and display them on the page
async function loadTodos(){
      const res = await fetch(API_URL);
      const todos = await res.json();
      const list = document.getElementById('todoList');
      list.innerHTML = '';

      // For each todo item, create a new div and append it
      todos.forEach(todo => {
          const div = document.createElement('div');
          div.className = 'todo' + (todo.completed ? 'completed' : '');

          // Set the inner HTML with checkbox, title, and delete button
          div.innerHTML = `
             <input type = "checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleComplete(${todo.id}, ${!todo.completed})">
             <span>${todo.title}</span>
             <button onclick="deleteTodo(${todo.id})">X</button>
          `;
          list.appendChild(div);
      });
}

// Add a new todo to backend
async function addTodo() {
      const input = document.getElementById('todoInput');
      const title = input.value.trim();
      if(!title) return;

      // Send POST request with new todo
      await fetch(API_URL, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ title, completed: false })
      });

      input.value = '';
      loadTodos();
}

// Update completion status of a todo
async function toggleComplete(id, completed) {
  // Send PUT request to update 'completed' status
  await fetch(`${API_URL}/${id}`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: '', completed })
  });
  loadTodos();
}

// Delete a todo item by id
async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    }); // Send DELETE request
    loadTodos(); // Reload updated list
}

loadTodos();