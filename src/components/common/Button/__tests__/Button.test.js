import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import Button from '../Button';

describe('Button component', () => {
  const buttonSelector = 'send-button';
  const buttonProps = {
    onClick: jest.fn(),
    isDisabled: false,
    children: 'button text'
  }
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Should render component without errors', () => {
    const { container } = render(<Button {...buttonProps}/>);
    expect(container).toMatchSnapshot();
  });

  it('Should call onclick event', () => {
    const { getByDataLb } = customRender(<Button {...buttonProps} />);
    const button = getByDataLb(buttonSelector)

    fireEvent.click(button)

    expect(buttonProps.onClick).toHaveBeenCalled();
  });

    it('Should not call onclick event on disabled', () => {
    const newProps = {...buttonProps, isDisabled: true }
    const { getByDataLb } = customRender(<Button {...newProps } />);
    const button = getByDataLb(buttonSelector)

    fireEvent.click(button)

    expect(newProps.onClick).not.toHaveBeenCalled();
  });

  it('Should have a content', () => {
    const { getByDataLb } = customRender(<Button {...buttonProps} />);
    const element = getByDataLb(buttonSelector);

    expect(element.textContent).toBe('button text');
  });
});