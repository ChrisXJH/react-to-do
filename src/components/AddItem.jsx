import React from 'react';
import PropTypes from 'prop-types';

class AddItem extends React.PureComponent {
  state = {
    name: ''
  };

  handleAdd = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: '' });
  };

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

AddItem.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddItem;
