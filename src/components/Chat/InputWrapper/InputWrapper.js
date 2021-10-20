import React, { useContext, useState } from 'react';
import { GlobalLandbotContext } from '../../../contexts/LandbotContext';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './InputWrapper.css';

/** The InputWrapper is the container that have the input and the action button to send messages */

const InputWrapper = () => {
  const [inputValue, setInputValue] = useState('');

  const Core = useContext(GlobalLandbotContext);

  const onChangeInputHandler = (e) =>{
    setInputValue(e.target.value)
  }

  const onKeyUpHandler = (e) =>{
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  }

  const submit = () => {
    if (inputValue !== '') {
      Core.sendMessage({ message: inputValue });
      setInputValue('');
    }
  };

  return (
    <div className="landbot-input-container" data-landbot="input-container">
      <div className="field">
        <div className="control">
          <Input
            placeholder={"Type here..."}
            value={inputValue}
            onChange={onChangeInputHandler}
            onKeyUp={onKeyUpHandler}
          />
          <Button onClick={submit} isDisabled={inputValue === ''}>
            <span className="icon is-large">
              <i className="fas fa-paper-plane fa-lg"></i>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default InputWrapper;