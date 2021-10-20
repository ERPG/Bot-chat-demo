  export const BOT = 'bot';
  export const USER = 'user';

/**
 * messagesFilter.
 *
 * @param {Object} data A message object.
 * @returns {boolean} Returns true or false for message type.
 */
  export const messagesFilter = (data) => {
    /** Support for basic message types */
    return ['text', 'dialog'].includes(data.type);
  }

/**
 * parseMessages: parse Array of messages.
 *
 * @param {Object} messages A messages object.
 * @returns {boolean} Returns a parsed message.
 */
  export const parseMessages = (messages) => {
    return Object
    .values(messages)
    .reduce((obj, next) => {
      obj[next.key] = parseMessage(next);
      return obj;
    }, {});
  }

/**
 * parseMessage: parse a message.
 *
 * @param {Object} data A message object.
 * @returns {Object} Returns an object containing a custom message object.
 */
export const parseMessage = (data) => {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? BOT : USER,
    timestamp: data.timestamp,
    type: data.type,
  };
}
/**
 * scrollBottom: Scroll to bottom of container.
 *
 * @param {HTMLElement} container An element container.
 * @returns {undefined}. does not return anything but execute element scrollTo function.
 */
export const scrollBottom = (container) => {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
}