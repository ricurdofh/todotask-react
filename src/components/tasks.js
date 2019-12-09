import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Close from '../assets/round_delete.png';

export default ({id, task, item, onClose}) => {
  return(
  <Draggable draggableId={id} index={item}>
    {provided => (
      <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="drag">
        <p>{task}</p>
        <div
          className='closeTask'
          data-toggle="modal"
          data-target="#confirm-delete"
          onClick={() => onClose(id)}>
          <img src={Close}></img>
        </div>
      </div>
    )}
  </Draggable>
)}