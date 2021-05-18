import { useState, useEffect } from 'react'
import { Paper, Box, Typography } from '@material-ui/core'
import { Button, IconButton } from '@material-ui/core'
import { useLocation, useHistory } from 'react-router'

const messages = [
  'Welcome to my interactive portfolio website inspired by Bloxorz.',
  'Beat the level to unlock the page... or click the auto-solve button',
  'Tap or click to get started!'
]

const EntryPage = ({ dismissEntryPage }) => {
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
      dismissEntryPage()
    updateText()
  })
  
  return (
      <>
      <div
        id='entry-page'
        onclick={() => {dismissEntryPage()}}>
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
          <Button
          variant='contained'
          onClick={() => {
            dismissEntryPage()
          }}
          style={{
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0)',
            position: 'relative',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            zIndex: '4'
          }}>
        </Button>
      </div>
      </>
  )
}

export default EntryPage
