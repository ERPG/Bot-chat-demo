import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import Input from '../Input';

describe('Input component', () => {
  const inputSelector = 'chat-input';
  const inputProps = {
    value: '',
    onChange: jest.fn(),
    onKeyUp: jest.fn(),
    placeholder: 'placeholder'
  }
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Should render component without errors', () => {
    const { container } = render(<Input {...inputProps}/>);
    expect(container).toMatchSnapshot();
  });

  it('Should call onChange event', async() => {
    const { getByDataLb } = customRender(<Input {...inputProps} />);
    const input = getByDataLb(inputSelector)
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {target: {value: 'landbot'}})

    expect(inputProps.onChange).toHaveBeenCalled();
  });

  it('Should have a placeholder', () => {
    const { getByDataLb } = customRender(<Input {...inputProps} />);
    const input = getByDataLb(inputSelector)
    expect(input).toBeInTheDocument();

    expect(input.placeholder).toBe('placeholder');
  });
});