import React from 'react';
import { createContext, useEffect, useState } from "react"

const GlobalLandbotContext = createContext(undefined);

/**
 * GlobalLandbotProvider: A Global provider for the landbot instance to share between the components
 * and ensure properties definition.
 */

const GlobalLandbotProvider = ({children}) => {

  const [landbot, setLandbot] = useState(undefined);
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {

    const isLandbotAvailable = isInit && window.hasOwnProperty('Landbot');

    if(isLandbotAvailable) {

      const landbotInstance = new window.Landbot.Core({
        firebase: window.firebase,
        brandID: 12235,
        channelToken: 'H-441480-B0Q96FP58V53BJ2J',
        welcomeUrl: 'https://welcome.landbot.io/',
        welcome: [
          { samurai: -1, type: 'text', message: 'Type something to start a conversation with landbot.' }
        ],
      });

      setLandbot(landbotInstance);
      setIsInit(false);
    }
  }, [window]);

  return(
    <GlobalLandbotContext.Provider value={landbot}>
      {children}
    </GlobalLandbotContext.Provider>
  )
}

export {GlobalLandbotContext, GlobalLandbotProvider}