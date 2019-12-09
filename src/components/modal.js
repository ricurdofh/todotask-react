import React, { useState } from 'react';
import { TasksContext } from './tasksContext';

export default () => {
  const [text, setText] = useState('');
  const onText = e => {
    setText(e.target.value.trim());
  }
  return (
  <TasksContext.Consumer>{({onSave, onDelete}) => (
    <div>
    <div className="modal fade" id="basicModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title" id="myModalLabel">Add new task</h4>
          </div>
          <div className="modal-body">
            <pre><label htmlFor="task">Task:  </label><input name="task" type="text" onChange={e => onText(e)} /></pre>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" id="save" data-dismiss="modal" onClick={() => onSave(text)}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="confirm-delete" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">            
          <div className="modal-header">
            <button type="button" className="close cancel_del" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title" id="myModalLabel">Confirm Delete</h4>
          </div>
      
          <div className="modal-body">
            <p>Are you sure you want to dele this task?.</p>
            <p className="debug-url"></p>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-default cancel_del" data-dismiss="modal">Cancel</button>
            <a href="#" className="btn btn-danger danger" id="delete" data-dismiss="modal" onClick={onDelete}>Delete</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )}</TasksContext.Consumer>
)};