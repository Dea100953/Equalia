// ===========================
// TODO LIST APP - MAIN SCRIPT
// ===========================

class TodoApp {
    constructor() {
        this.todos = [];
        this.filteredTodos = [];
        this.currentSort = 'date-new';
        this.currentFilter = 'all';
        this.editingId = null;
        this.init();
    }

    // Initialize the app
    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
    }

    // Setup all event listeners
    setupEventListeners() {
        // Add todo
        document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
        document.getElementById('todoInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Category filter
        document.getElementById('categorySelect').addEventListener('change', (e) => {
            this.currentFilter = e.target.value;
            this.render();
        });

        // Sort
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.render();
        });

        // Clear completed
        document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());

        // Clear all
        document.getElementById('clearAll').addEventListener('click', () => this.clearAll());

        // Export
        document.getElementById('exportBtn').addEventListener('click', () => this.exportTodos());

        // Modal
        document.getElementById('closeModal').addEventListener('click', () => this.closeModal());
        document.getElementById('cancelEdit').addEventListener('click', () => this.closeModal());
        document.getElementById('saveEdit').addEventListener('click', () => this.saveEdit());
        document.getElementById('editModal').addEventListener('click', (e) => {
            if (e.target.id === 'editModal') this.closeModal();
        });
    }

    // Add a new todo
    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();

        if (!text) {
            this.showToast('Please enter a task', 'error');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            category: 'other',
            dueDate: null,
            createdAt: new Date().toISOString()
        };

        this.todos.unshift(todo);
        this.saveToStorage();
        this.render();
        input.value = '';
        this.showToast('Task added successfully!', 'success');
    }

    // Toggle todo completion
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
            const message = todo.completed ? 'Task completed! 🎉' : 'Task marked as pending';
            this.showToast(message, 'success');
        }
    }

    // Delete a todo
    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToStorage();
            this.render();
            this.showToast('Task deleted', 'info');
        }
    }

    // Open edit modal
    openEditModal(id) {
        this.editingId = id;
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            document.getElementById('editInput').value = todo.text;
            document.getElementById('editCategory').value = todo.category;
            document.getElementById('editDueDate').value = todo.dueDate || '';
            document.getElementById('editModal').classList.remove('hidden');
        }
    }

    // Close edit modal
    closeModal() {
        document.getElementById('editModal').classList.add('hidden');
        this.editingId = null;
    }

    // Save edited todo
    saveEdit() {
        if (this.editingId) {
            const todo = this.todos.find(t => t.id === this.editingId);
            if (todo) {
                todo.text = document.getElementById('editInput').value.trim();
                todo.category = document.getElementById('editCategory').value;
                todo.dueDate = document.getElementById('editDueDate').value || null;

                if (!todo.text) {
                    this.showToast('Task text cannot be empty', 'error');
                    return;
                }

                this.saveToStorage();
                this.render();
                this.closeModal();
                this.showToast('Task updated successfully!', 'success');
            }
        }
    }

    // Clear completed todos
    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        if (completedCount === 0) {
            this.showToast('No completed tasks to clear', 'info');
            return;
        }

        if (confirm(`Delete ${completedCount} completed task(s)?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showToast('Completed tasks cleared', 'success');
        }
    }

    // Clear all todos
    clearAll() {
        if (this.todos.length === 0) {
            this.showToast('No tasks to clear', 'info');
            return;
        }

        if (confirm('Delete all tasks? This cannot be undone!')) {
            this.todos = [];
            this.saveToStorage();
            this.render();
            this.showToast('All tasks deleted', 'success');
        }
    }

    // Filter todos
    filterTodos() {
        if (this.currentFilter === 'all') {
            this.filteredTodos = [...this.todos];
        } else {
            this.filteredTodos = this.todos.filter(t => t.category === this.currentFilter);
        }
    }

    // Sort todos
    sortTodos() {
        const todos = [...this.filteredTodos];

        switch (this.currentSort) {
            case 'date-new':
                todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case 'date-old':
                todos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case 'completed':
                todos.sort((a, b) => b.completed - a.completed);
                break;
            case 'pending':
                todos.sort((a, b) => a.completed - b.completed);
                break;
            case 'alphabetical':
                todos.sort((a, b) => a.text.localeCompare(b.text));
                break;
        }

        return todos;
    }

    // Check if task is overdue
    isOverdue(dueDate) {
        if (!dueDate) return false;
        return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString();
    }

    // Format date for display
    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (date.toDateString() === today.toDateString()) return 'Today';
        if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    // Update statistics
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const remaining = total - completed;
        const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('remainingTasks').textContent = remaining;
        document.getElementById('progressPercent').textContent = progress + '%';
    }

    // Render the app
    render() {
        this.filterTodos();
        const sortedTodos = this.sortTodos();
        const todoList = document.getElementById('todoList');

        if (sortedTodos.length === 0) {
            todoList.innerHTML = '<li class="empty-state"><p>✨ No tasks yet. Add one to get started!</p></li>';
        } else {
            todoList.innerHTML = sortedTodos.map(todo => this.createTodoElement(todo)).join('');
            // Add event listeners to all todo items
            document.querySelectorAll('.checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    this.toggleTodo(parseInt(e.target.dataset.id));
                });
            });
            document.querySelectorAll('.btn-edit').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    this.openEditModal(parseInt(e.target.dataset.id));
                });
            });
            document.querySelectorAll('.btn-delete').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    this.deleteTodo(parseInt(e.target.dataset.id));
                });
            });
        }

        this.updateStats();
    }

    // Create todo element HTML
    createTodoElement(todo) {
        const isOverdue = this.isOverdue(todo.dueDate);
        const formattedDate = this.formatDate(todo.dueDate);

        return `
            <li class="todo-item ${todo.completed ? 'completed' : ''} ${todo.category}">
                <input 
                    type="checkbox" 
                    class="checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    data-id="${todo.id}"
                >
                <div class="todo-content">
                    <div class="todo-text">${this.escapeHtml(todo.text)}</div>
                    <div class="todo-meta">
                        <span class="todo-category">${todo.category}</span>
                        ${todo.dueDate ? `<span class="todo-date ${isOverdue ? 'overdue' : ''}">${isOverdue ? '⚠️' : '📅'} ${formattedDate}</span>` : ''}
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="btn-action btn-edit" data-id="${todo.id}">Edit</button>
                    <button class="btn-action btn-delete" data-id="${todo.id}">Delete</button>
                </div>
            </li>
        `;
    }

    // Escape HTML characters
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Export todos as JSON
    exportTodos() {
        const dataStr = JSON.stringify(this.todos, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `todos_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        this.showToast('Tasks exported successfully!', 'success');
    }

    // Show toast notification
    showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type}`;
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }

    // Save to local storage
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // Load from local storage
    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        if (stored) {
            try {
                this.todos = JSON.parse(stored);
            } catch (error) {
                console.error('Error loading todos from storage:', error);
                this.todos = [];
            }
        }
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});