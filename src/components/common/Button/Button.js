import React from 'react';

import './Button.css';

/**
 * Represents a base Button.
 * @constructor
 * @param {ReactNode} children - An element or text inside button.
 * @param {boolean} isDisabled - disables or not the button.
 * @param {MouseEvent<HTMLButtonElement>} onClick - Action that is executed on click event.
 * There are more props in this element, for the purpose of this test we will use this few.
 */

const Button = ({children, isDisabled, onClick}) => {
  return (
    <>
      <button
        data-landbot="send-button"
        className="button landbot-input-send"
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
      </button>
    </>
  )
}

export default Button;