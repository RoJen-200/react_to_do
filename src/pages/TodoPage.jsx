// src/pages/TodoPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/ToDoList';

function TodoPage() {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Buy groceries', completed: false },
        { id: 2, title: 'Read a book', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const navigate = useNavigate();

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const addTodo = (e) => {
        e.preventDefault();
        if (!newTodo) return;

        const newTodoItem = {
            id: Date.now(),
            title: newTodo,
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
    };

    const handleClick = () => {
        navigate('/dnd');
    }

    return (
        <div>
            <h1>My To-Do List</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new task..."
                />
                <button type="submit">Add</button>
            </form>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <button onClick={handleClick}>Перейти на DND</button>
        </div>
    );
}

export default TodoPage;