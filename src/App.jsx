// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';

function App() {
    return (
                <Routes>
                    <Route path="/" element={<TodoPage />} />
                    <Route path="/dnd" element={<DndPage />} />
                </Routes>
    );
}

export default App