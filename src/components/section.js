import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { TasksContext } from './tasksContext';
import Task from './tasks';

export default ({id, name}) => (
  <Droppable droppableId={id}>
  {(provided, snapshot) => (
    <TasksContext.Consumer>{({tasks, setDelTask}) => (
      <div
        ref={provided.innerRef}
        style={snapshot.isDraggingOver ? styles : {}}
        {...provided.droppableProps}
        id={id}
        className="drop">
        <div className="title">
          <h2>{name}</h2>
        </div>
        {tasks.filter(task => task.status === id).map((task, i) => (
          <Task id={task.id} task={task.task} item={i}  key={i} onClose={setDelTask} />
        ))}
        {provided.placeholder}
      </div>
    )}</TasksContext.Consumer>
  )}
  </Droppable>
)

const styles = { 
  borderColor: '#000',
  borderStyle: 'dashed',
  borderWidth: '5px',
  opacity: .4
}