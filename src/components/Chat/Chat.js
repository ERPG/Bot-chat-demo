import React from 'react';
import InputWrapper from './InputWrapper/InputWrapper';
import MessagesWrapper from './MessagesWrapper/MessagesWrapper';
import Header from './Header/Header';

/** For this component I have decided giving the layout of the app and with
 * the idea to make it as customizable as possible, to divide the component in three parts. */

export default function Chat() {
  return (
    <div data-landbot="chat-container">
      <Header />
      <MessagesWrapper />
      <InputWrapper />
    </div>
  );
}