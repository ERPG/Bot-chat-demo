import { queryHelpers, buildQueries } from '@testing-library/react';

/**
 * This configuration expose custom tools to use in the test files, for example a
 * custom selector data-landbot that we will use in our components.
 */

const testingSelector = 'data-landbot';

const queryAllByDataLb = (...args) =>
  // @ts-ignore
  queryHelpers.queryAllByAttribute(testingSelector, ...args);

const getMultipleError = (c, dataValue) =>
  `Found multiple elements with the ${testingSelector} attribute of: ${dataValue}`;
const getMissingError = (c, dataValue) =>
  `Unable to find an element with the ${testingSelector} attribute of: ${dataValue}`;

const [
  queryByDataLb,
  getAllByDataLb,
  getByDataLb,
  findAllByDataLb,
  findByDataLb,
] = buildQueries(queryAllByDataLb, getMultipleError, getMissingError);

export {
  queryByDataLb,
  queryAllByDataLb,
  getByDataLb,
  getAllByDataLb,
  findAllByDataLb,
  findByDataLb,
};