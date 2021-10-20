/**
 * GRAPH FUNCTIONS.
 */

/**
 * getNodeInputConnections: Get a node input connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeInputConnections(node, graph) {
  const connections = Object.values(graph.connections);
  const getIds = ({targetPath}) => node.id === targetPath;
  return connections.filter(getIds);
}

/**
 * getNodeOutputConnections: Get a node output connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeOutputConnections(node, graph) {
  const connections = Object.values(graph.connections);
  const getIds = ({sourcePath}) => node.id === sourcePath;
  return connections.filter(getIds);
}

/**
 * getNodeConnections: Get a node connections.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Connection models.
 */
export function getNodeConnections(node, graph) {
  const connections = Object.values(graph.connections);
  const getIds = ({id}) => id.includes(node.id);
  return connections.filter(getIds);
}

/**
 * getLeafNodes: Get all leaf nodes (no output connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getLeafNodes(graph) {
  const connections = Object.values(graph.connections);
  const nodes = Object.values(graph.nodes);
  const getNodes = (el) => !connections.some(el2 => el.id === el2.sourcePath);
  return nodes.filter(getNodes);
}

/**
 * getRootNodes: Get all root nodes (no input connections).
 *
 * @param {Object} graph Bot model object.
 * @returns {Array} Array of Node models.
 */
export function getRootNodes(graph) {
  const connections = Object.values(graph.connections);
  const nodes = Object.values(graph.nodes);
  const getNodes = (el) => !connections.some(el2 => el.id === el2.targetPath);
  return nodes.filter(getNodes)
}

/**
 * hasMultipleSources: Determines if a node is reachable from different sources.
 *
 * @param {Object} node Node model object.
 * @param {Object} graph Bot model object.
 * @returns {Boolean} True if a node has different source paths.
 */
export function hasMultipleSources(node, graph) {
  const connections = Object.values(graph.connections);
  const getNodes = (el) => node.id === el.targetPath;
  return connections.filter(getNodes).length > 1

}
