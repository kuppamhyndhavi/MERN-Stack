import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <header className="header">
      <div className="left-section">
      <img className="hamburger-menu" src="/icons/hamburger-menu.svg" alt="menu" />
      <img className="youtube-logo" src="/icons/youtube-logo.svg" alt="logo" />
      </div>

      <div className="middle-section">
      <input className="search-bar" type="text" placeholder="Search" />
      <button className="search-button">
        <img className="search-icon" src="/icons/search.svg" alt="search" />
        <div className="tooltip">Search</div>
      </button>

      <button className="voice-search-button">
        <img className="voice-search-icon" src="/icons/voice-search-icon.svg" alt="voice search" />
        <div className="tooltip">Search with your voice</div>
      </button>
      </div>

      <div className="right-section">
      <div className="upload-icon-container">
        <img className="upload-icon" src="/icons/upload.svg" alt="upload" />
        <div className="tooltip">Create</div>
      </div>

      <img className="youtube-apps-icon" src="/icons/youtube-apps.svg" alt="apps" />

      <div className="notifications-icon-container">
        <img className="notifications-icon" src="/icons/notifications.svg" alt="notifications" />
        <div className="notifications-count">3</div>
      </div>

      <img className="current-user-picture" src="icons/my-channel.jpg" alt="user" />
      </div>
      </header>
  );
}

export default App