import React from 'react';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import Sections from './components/sections';
import Modal from './components/modal';
import TasksContextProvider, { TasksContext } from './components/tasksContext';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simple to-do manager</h1>
        <p>Drag and drop items to the status you want or add a new task</p>
        <a href="#" className="btn btn-lg btn-default" data-toggle="modal" data-target="#basicModal">Add new task</a>
      </header>
      <TasksContextProvider>
        <TasksContext.Consumer>{({onDragEnd}) => (
          <DragDropContext onDragEnd={onDragEnd}>
              <Sections />
          </DragDropContext>
        )}</TasksContext.Consumer>
        <Modal />
      </TasksContextProvider>
    </div>
  );
};

export default App;
