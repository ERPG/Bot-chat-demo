import React from 'react';

import './Message.css';

/**
 * Represents a Message.
 * @constructor
 * @param {string} key - message key.
 * @param {string} author - The author of the message that can be Bot or User.
 * @param {string} text - The text message.
 * There are more props in this element, for the purpose of this test we will use this few.
 */

const Message = ({key, author, text}) => {
  return (
    <article
      key={key}
      data-author={author}
      data-landbot="message"
      className="media landbot-message"
    >
      <figure className="media-left landbot-message-avatar">
        <p className="image is-64x64">
          <img className="is-rounded" src="http://i.pravatar.cc/100" alt="" />
        </p>
      </figure>
      <div className="media-content landbot-message-content">
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </article>
  )
}

export default Message;