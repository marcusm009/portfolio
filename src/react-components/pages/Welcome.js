import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Typography, Button } from '@material-ui/core'

const messages = [
  'Welcome to my interactive portfolio website inspired by Bloxorz.',
  'Beat the level to unlock the page... or click the auto-solve button.',
  'Tap or click to get started!'
]

const Welcome = ({ dismissWelcomePage }) => {
  const location = useLocation().pathname
  const [curMessages, setMessages] = useState(Array(messages.length).fill(''))

  const updateText = () => {
    let didUpdate = false
    let newMessages = [...curMessages]

    for(let i = 0; i < messages.length; i++) {
      if(curMessages[i].length < messages[i].length) {
        newMessages[i] = messages[i].substring(0, curMessages[i].length + 1)
        didUpdate = true
        break
      }
    }
    
    if(didUpdate) {
      setTimeout(() => {
        setMessages(newMessages)
      }, 75)
    }
  }

  useEffect(() => {
    if(location !== '/')
      dismissWelcomePage()
    updateText()
  })
  
  return (
      <>
      <Button
          variant='contained'
          onClick={() => {
            dismissWelcomePage()
          }}
          style={{
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'absolute',
            top: '4rem',
            bottom: '0',
            width: '100%',
            textAlign: 'center',
            zIndex: '1000'
          }}>
      </Button>
      <div
        id='welcome-page'
        onclick={() => {dismissWelcomePage()}}>
      {
      curMessages.map((msg, idx) => (
        <div>
          <Typography
            className={(msg.length === messages[idx].length) ? 'no-cursor' : ''}
            variant='h3'
            style={{
              position: 'relative'
            }}
            gutterBottom
            >
            {msg}
          </Typography>
        </div>
      ))}
      </div>
      </>
  )
}

export default Welcome
