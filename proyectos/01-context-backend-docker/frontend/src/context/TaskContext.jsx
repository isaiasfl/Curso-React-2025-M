// import
import { createContext, useEffect, useState } from "react";

// crear el contexto
export const TaskContext = createContext();

// crear el provider del contexto
export const TaskProvider = ({ children }) => {
  /**
   * task = {
   *  id: 1,
   *  title: 'Tarea 1',
   *  completed: false
   * }
   */
  // HOOKS
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    // guardar en el localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // acciones que puedo realizar con las tareas:
  //- crear tarea

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  //- eliminar tarea
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  //- completar tarea
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  //- editar tarea

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskCompletion }}
    >
      {children}
    </TaskContext.Provider>
  );
};
