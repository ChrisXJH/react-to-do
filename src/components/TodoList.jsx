import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ items, onDeleteItem, onItemDone }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        <TodoListItem
          item={item}
          onDelete={() => onDeleteItem(item.id)}
          onDone={() => onItemDone(item.id)}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onItemDone: PropTypes.func.isRequired
};

export default TodoList;
