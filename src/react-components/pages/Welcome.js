import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Typography, Button } from '@material-ui/core'

import Instructions from '../Instructions'

const messages = [
  'Welcome to my interactive portfolio',
  'website inspired by Bloxorz!',
]

const Welcome = ({ dismissWelcomePage, baseRoute }) => {
  const location = useLocation().pathname
  const [curMessages, setMessages] = useState(Array(messages.length).fill(''))
  
  const [showInstructions, setShowInstructions] = useState(false)

  const updateText = () => {
    let didUpdate = false
    let newMessages = [...curMessages]

    for(let i = 0; i < messages.length; i++) {
      if(messages[i] === '<br>') {
        if(curMessages[i] === '<br>')
          continue
        newMessages[i] = messages[i]
        didUpdate = true
        break
      }
      if(curMessages[i].length < messages[i].length) {
        newMessages[i] = messages[i].substring(0, curMessages[i].length + 1)
        didUpdate = true
        break
      }
    }
    
    if(didUpdate) {
      setTimeout(() => {
        setMessages(newMessages)
      }, 50)
    } else {
      // setShowInstructions(true)
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
          disabled={showInstructions ? false : true}
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
        onclick={() => {dismissWelcomePage()}}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {curMessages.map((msg, idx) => <Message msg={msg} idx={idx}/>)}
        </div>
        {
        showInstructions ? (
          <Instructions baseRoute={baseRoute}/>
        ) : (
          //<></>
          <>
            <MainIcon />
            <div style={{
              display: 'block',
            }}>
              <Typography
                className='no-cursor'
                variant='h4'
                style={{
                  position: 'relative'
                }}
                >
                Please choose a mode:
              </Typography>
              <br/>
              <Button
              variant='contained'
              onClick={() => {
                setShowInstructions(true)
              }}>
                Interactive Game
              </Button>
              <Typography
                className='no-cursor'
                style={{
                  position: 'relative'
                }}
                >
                Complete a puzzle before unlocking each page
              </Typography>
              <br/>
              <Button
              variant='contained'>
                Classic
              </Button>
              <Typography
                className='no-cursor'
                style={{
                  position: 'relative'
                }}
                >
                View the portfolio without having to complete puzzles
              </Typography>
            </div>
          </>
        )
        }
      </div>
      </>
  )
}

const Message = ({ msg, idx }) => {
  return (
    msg === '<br>' ? <br/>
    : (
      <div style={{
          width: 'fit-content',
          margin: '0 auto'
        }}>
        <Typography
          className={(msg.length === messages[idx].length || msg.length == 0) ? 'no-cursor' : ''}
          variant='h3'
          style={{
            position: 'relative'
          }}
          >
          {msg}
        </Typography>
      </div>
  ))
}

const MainIcon = () => {
  return (
    <svg height='200' width='200'>
      <line x1='100' y1='50' x2='50' y2='100' style={{
        stroke:'rgb(255,0,0)',
        strokeWidth:'2'
      }}/>
      <line x1='50' y1='100' x2='100' y2='150' style={{
        stroke:'rgb(255,0,0)',
        strokeWidth:'2'
      }}/>
      <line x1='100' y1='150' x2='150' y2='100' style={{
        stroke:'rgb(255,0,0)',
        strokeWidth:'2'
      }}/>
      <line x1='150' y1='100' x2='100' y2='50' style={{
        stroke:'rgb(255,0,0)',
        strokeWidth:'2'
      }}/>
    </svg>
  )
}

export default Welcome
