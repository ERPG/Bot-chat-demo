import React, { useContext, useEffect, useState } from 'react';
import { GlobalLandbotContext } from '../../../contexts/LandbotContext';
import { messagesFilter, parseMessage, parseMessages, scrollBottom } from '../../../helpers/MessagesHelper';

import Message from '../../common/Message/Message';

import './MessageWrapper.css';

/** The MessagesWrapper is the container that loads all the messages between the user and the bot */

const MessagesWrapper = () => {
  const [messages, setMessages] = useState({});

  const Core = useContext(GlobalLandbotContext);

  useEffect(() => {
    if(Core) {
      subscribeToCore();
      initCore();
    }
  }, [Core]);

  const subscribeToCore = () => {
    Core.pipelines.$readableSequence.subscribe(data => {
      setMessages(messages => ({
        ...messages,
        [data.key]: parseMessage(data),
      }))
    });
  }

  const initCore = () => {
    Core.init().then(data => {
      setMessages(
        parseMessages(data.messages)
      );
    });
  }

  useEffect(() => {
    const container = document.getElementById('landbot-messages-container');
    scrollBottom(container);
  }, [messages]);

  return (
    <div id="landbot-messages-container" className="landbot-messages-container" data-landbot="message-container">
      {Object.values(messages)
        .filter(messagesFilter)
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(message => (
            <Message key={message.key} author={message.author} text={message.text} />
        ))
      }
    </div>)
}

export default MessagesWrapper;