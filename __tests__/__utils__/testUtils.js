import { render, queries } from '@testing-library/react';
import * as customQueries from './customQueries';

/**
 * customRender: Render a React component for testing.
 *
 * @param {ReactElement} ui The react component.
 * @param {Object} options. Optional. aditional configurations.
 * @returns {Node} The node element.
 */

const customRender = (
  ui,
  options
) => render(ui, { queries: { ...queries, ...customQueries }, ...options });

export * from '@testing-library/react';

export { customRender };