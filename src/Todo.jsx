import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    {
      userId: 1,
      id: 1,
      title: "Wäsche waschen",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "Einkaufen",
      completed: true,
    },
    {
      userId: 1,
      id: 3,
      title: "Kochen",
      completed: false,
    },
  ]);

  function addTask() {
    const userInput = document.getElementById("userInput").value;
    const randomId = new Date();

    const newTask = {
      userId: 1,
      id: randomId,
      title: userInput,
      completed: false,
    };

    setTasks((t) => [...t, newTask]);

    document.getElementById("userInput").value = "";
  }

  function deleteTask(event) {
    setTasks(tasks.filter((task) => task.id !== event));
  }

  return (
    <div>
      <h1>Todo</h1>
      <input type="text" placeholder="task" id="userInput" />
      <button onClick={addTask}>add Task</button>
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task, index) => (
          <li key={task.id} id={task.id}>
            <input type="checkbox" defaultChecked={task.completed} />
            {task.title}{" "}
            <button onClick={() => deleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
