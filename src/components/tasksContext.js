import React, { createContext, useState, useEffect } from 'react';
import Tasks from '../base-data.json';
import uuid from 'uuid'

export const TasksContext = createContext();

export default props => {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : Tasks);
  const [deleteTask, setDelTask] = useState('');
  const onDragEnd = e => {
    if(e.destination.droppableId !== e.source.droppableId) {
      const newTasks = tasks.map(task => {
        if(task.id === e.draggableId) {
          task.status = e.destination.droppableId
        }
        return task
      });
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  }

  const onDelete = () => {
    const updateTasks = tasks.filter(task => task.id !== deleteTask);
    setTasks(updateTasks);
    localStorage.setItem('tasks', JSON.stringify(updateTasks));
    setDelTask('');
  }

  const onSave = task => {
    if(task !== '') {
      setTasks([...tasks, {task, status: 'todo', id: uuid.v4()}]);
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks]);

  return (
    <TasksContext.Provider value={{tasks, onDelete, onDragEnd, onSave, setDelTask}}>
      {props.children}
    </TasksContext.Provider>
  )
}
