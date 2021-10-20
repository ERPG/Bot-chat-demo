import React from 'react';
import { render } from '@testing-library/react';
import { customRender } from '../../../../__tests__/__utils__/testUtils';
import Chat from '../Chat';

describe('Chat component', () => {
  const chatContainerSelector = 'chat-container';

  beforeEach(() => {
    window.HTMLElement.prototype.scrollTo = jest.fn();
  });

  it('Should render component without errors', () => {
    const { container } = render(<Chat />);
    expect(container).toMatchSnapshot();
  });

  it('Should have a container', () => {
    const { getByDataLb } = customRender(<Chat />);
    const element = getByDataLb(chatContainerSelector)
    expect(element).toBeDefined();
  });
});