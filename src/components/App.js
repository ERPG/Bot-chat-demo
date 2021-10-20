import React from 'react';

import Chat from '../components/Chat/Chat';
import { GlobalLandbotProvider } from '../contexts/LandbotContext';

import './App.css'

/** This component represents the root component of the application. */

export default function App() {
  return (
    <section id="landbot-app" className="hero is-fullheight is-dark">
      <div className="hero-body">
        <div className="chat-container">
          <div className="landbot-chat">
            <GlobalLandbotProvider>
              <Chat />
            </GlobalLandbotProvider>
          </div>
        </div>
      </div>
    </section>
  );
}