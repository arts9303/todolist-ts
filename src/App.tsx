import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoList";

function App() {

    let tasks1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: false },
        { id: 3, title: "React", isDone: false }
    ]

    return (
        <div className="App">
            <TodoList title="What to do" tasks={tasks1} />
        </div>
    );
}

export default App;
