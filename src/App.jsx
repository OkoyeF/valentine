import { useState } from 'react'

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '60%', left: '60%' })
  const [yesClicked, setYesClicked] = useState(false)
  const [noHoverCount, setNoHoverCount] = useState(0)

  const handleNoHover = () => {
    // Generate random positions for the No button
    const newTop = Math.random() * 80 + 10 // Between 10% and 90%
    const newLeft = Math.random() * 80 + 10 // Between 10% and 90%
    
    setNoButtonPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`
    })
    
    setNoHoverCount(prev => prev + 1)
  }

  const handleYesClick = () => {
    setYesClicked(true)
  }

  // Get increasingly desperate messages as she tries to click No
  const getNoButtonText = () => {
    if (noHoverCount === 0) return 'No'
    if (noHoverCount < 3) return 'Are you sure?'
    if (noHoverCount < 5) return 'Really?'
    if (noHoverCount < 8) return 'Think again!'
    if (noHoverCount < 12) return 'Please? 🥺'
    return 'No escape!'
  }

  if (yesClicked) {
    return (
      <div className="container success">
        <div className="success-content">
          <h1 className="success-title">🎉 Yay! 🎉</h1>
          <p className="success-message">I knew you'd say yes! ❤️</p>
          <p className="success-submessage">Can't wait to spend Valentine's Day with you! 💕</p>
          <div className="hearts">
            <span>💖</span>
            <span>💗</span>
            <span>💕</span>
            <span>💝</span>
            <span>💖</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Will you be my Valentine? 💝</h1>
        <p className="subtitle">I promise to make it special! 🌹</p>
        
        <div className="buttons-container">
          <button 
            className="yes-button"
            onClick={handleYesClick}
          >
            Yes! 💕
          </button>
          
          <button 
            className="no-button"
            onMouseEnter={handleNoHover}
            onClick={handleNoHover}
            style={{
              position: 'absolute',
              top: noButtonPosition.top,
              left: noButtonPosition.left,
              transition: 'all 0.3s ease'
            }}
          >
            {getNoButtonText()}
          </button>
        </div>
        
        {noHoverCount > 0 && (
          <p className="hint">
            {noHoverCount < 5 ? "The 'No' button seems a bit shy... 😊" : "Just click 'Yes' already! 😄"}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
