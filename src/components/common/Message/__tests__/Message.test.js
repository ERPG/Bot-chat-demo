import React from 'react';
import { render } from '@testing-library/react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import Message from '../Message';

describe('Message component', () => {
  const messagesSelector = 'message';

  const messagesProps = {
    key: '',
    author:'bot',
    text:'hola'
  }
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('Should render component without errors', () => {
    const { container } = render(<Message {...messagesProps}/>);
    expect(container).toMatchSnapshot();
  });

  it('Should message be in the document', async() => {
    const { getByDataLb } = customRender(<Message {...messagesProps} />);
    const message = getByDataLb(messagesSelector)
    expect(message).toBeInTheDocument();
  });
});