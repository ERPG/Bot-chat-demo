import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';

describe('Header component', () => {
  const headerContainerSelector = 'header-container';
  const headerTextSelector = 'header-subtitle';

  it('Should render component without errors', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it('Should have a container', () => {
    const { getByDataLb } = customRender(<Header />);
    const element = getByDataLb(headerContainerSelector)
    expect(element).toBeDefined();
  });

  it('Should have a text', () => {
    const { getByDataLb } = customRender(<Header />);
    const element = getByDataLb(headerTextSelector);
    expect(element.textContent).toBe('Landbot');
  });
});