import React from 'react';
import './Header.css';

/** The header of the Chat */

const Header = () => {
  return (
  <div>
    <div className="landbot-header" data-landbot="header-container">
      <h1 className="subtitle" data-landbot="header-subtitle">Landbot</h1>
    </div>
  </div>
  )
}

export default Header;