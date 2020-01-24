import React from 'react';
import TodoList from './TodoList';
import AddItem from './AddItem';

export default class AppWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.maxId = 0;
    this.state = {
      todoItems: []
    };
  }

  componentDidMount() {
    this.setState({
      todoItems: [
        this.makeItem('Study'),
        this.makeItem('LeetCode'),
        this.makeItem('Eat lunch')
      ]
    });
  }

  makeItem = name => {
    return {
      id: this.maxId++,
      name,
      done: false
    };
  };

  handleAddItem = name => {
    this.setState({
      todoItems: [...this.state.todoItems, this.makeItem(name)]
    });
  };

  handleDeleteItem = id => {
    let { todoItems } = this.state;
    todoItems = todoItems.filter(item => item.id !== id);
    this.setState({ todoItems });
  };

  handleDone = id => {
    let { todoItems } = this.state;
    todoItems = todoItems.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    this.setState({ todoItems });
  };

  render() {
    return (
      <React.Fragment>
        <TodoList
          items={this.state.todoItems}
          onDeleteItem={this.handleDeleteItem}
          onItemDone={this.handleDone}
        />
        <AddItem onAdd={this.handleAddItem} />
      </React.Fragment>
    );
  }
}
