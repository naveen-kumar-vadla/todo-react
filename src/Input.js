import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: props.value };
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onInputValueChange(event) {
    const inputValue = event.target.value;
    this.setState(_ => ({ inputValue }));
  }

  onKeyDown(event) {
    const key = event.key;
    const inputValue = event.target.value;
    if (inputValue !== '' && key === 'Enter') {
      this.setState(_ => ({ inputValue: this.props.value }));
      this.props.onEnter(inputValue);
    }
  }

  render() {
    return (
      <input
        className={this.props.className}
        type='text'
        value={this.state.inputValue}
        onChange={this.onInputValueChange}
        onKeyDown={this.onKeyDown}
        autoFocus={this.props.autoFocus}
      ></input>
    );
  }
}

export default Input;
