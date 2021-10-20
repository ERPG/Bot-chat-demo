import React from 'react';
import { render } from '@testing-library/react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import InputWrapper from '../InputWrapper';

describe('InputWrapper component', () => {
  const inputContainerSelector = 'input-container';

  it('Should render component without errors', () => {
    const { container } = render(<InputWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('Should have a container', () => {
    const { getByDataLb } = customRender(<InputWrapper />);
    const element = getByDataLb(inputContainerSelector)
    expect(element).toBeDefined();
  });
});