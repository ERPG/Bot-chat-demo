import React from 'react';
import { render } from '@testing-library/react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import MessagesWrapper from '../MessagesWrapper';

describe('MessagesWrapper component', () => {
  const messageContainerSelector = 'message-container';

  beforeEach(() => {
    window.HTMLElement.prototype.scrollTo = jest.fn();
  });

  it('Should render component without errors', () => {
    const { container } = render(<MessagesWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('Should have a container', () => {
    const { getByDataLb } = customRender(<MessagesWrapper />);
    const element = getByDataLb(messageContainerSelector)
    expect(element).toBeDefined();
  });
});