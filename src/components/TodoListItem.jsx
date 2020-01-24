import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ item, onDelete, onDone }) => (
  <div>
    <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
      {item.name}
    </span>
    &nbsp;
    <button onClick={onDone}>{item.done ? 'Undone' : 'Done'}</button>
    <button onClick={onDelete}>X</button>
  </div>
);

TodoListItem.propsTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired
};

export default TodoListItem;
