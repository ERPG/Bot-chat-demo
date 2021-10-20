import React from 'react';

import './Input.css';

/**
 * Represents a base Input.
 * @constructor
 * @param {string} value - Input value.
 * @param {React.ChangeEvent<HTMLInputElement>} onChange - Action to execute on input change.
 * @param {React.KeyboardEvent<HTMLInputElement>} onKeyUp - Action to execute on keyboard event.
 * @param {string} placeholder - input placeholder text.
 * There are more props in this element, for the purpose of this test we will use this few.
 */

const Input = ({value, onChange, onKeyUp, placeholder }) => {
  return (
    <input
      data-landbot='chat-input'
      className="landbot-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  )
}

export default Input;