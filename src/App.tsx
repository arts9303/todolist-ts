import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoList";

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    let incomingTasks = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ]

    let [tasks, setTasks] = useState<Array<TaskType>>(incomingTasks)

    let [filter, setFilter] = useState<FilterValuesType>("all")

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }

    let changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForRender;

    switch (filter) {
        case "completed":
            tasksForRender = tasks.filter(task => task.isDone)
            break
        case "active":
            tasksForRender = tasks.filter(task => !task.isDone)
            break
        default:
            tasksForRender = tasks
    }

    return (
        <div className="App">
            <TodoList
                changeFilter={changeFilter}
                removeTask={removeTask}
                title="What to do"
                tasks={tasksForRender}
            />
        </div>
    );
}

export default App;
