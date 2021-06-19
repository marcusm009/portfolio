import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Typography, Button } from '@material-ui/core'
import { useWindowDimensions } from '../hooks.js'

import Instructions from '../Instructions'

const messages = [
  'Welcome to my portfolio',
  'website inspired by Bloxorz!',
]

const Welcome = ({ startGame, startClassic, baseRoute }) => {
  const location = useLocation().pathname
  const { windowHeight, windowWidth } = useWindowDimensions()
  const [curMessages, setMessages] = useState(Array(messages.length).fill('*'))
  
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
      startClassic()
    updateText()
    console.log(windowHeight)
  })
  
  return (
      <>
      <Button
          variant='contained'
          disabled={showInstructions ? false : true}
          onClick={() => {
            startGame()
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
        // onClick={() => {startGame()}}
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
            <MainIcon size={Math.min(windowHeight, windowWidth) / 2}/>
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
              variant='contained'
              onClick={() => {
                startClassic()
              }}
              >
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
          className={(msg.length === messages[idx].length || msg.length == 1) ? 'no-cursor' : ''}
          variant='h3'
          style={{
            position: 'relative',
            opacity: msg === '*' ? '0%' : '100%'
          }}
          >
          {msg}
        </Typography>
      </div>
  ))
}

const MainIcon = ({ size }) => {
  const size_tf = size * 1.5
  
  return (
    <svg height={size_tf*.75} width={size_tf}>
      <IconSegment size={size_tf} offsetX={0} offsetY={-size_tf*1/4} isTop/>
      <IconSegment size={size_tf} offsetX={0} offsetY={size_tf*1/4}/>
      <line className='main-icon' x1={size_tf*1/4} y1={size_tf*1/8} x2={size_tf*1/4} y2={size_tf*5/8}/>
      <line className='main-icon' x1={size_tf*3/4} y1={size_tf*1/8} x2={size_tf*3/4} y2={size_tf*5/8}/>
      <line className='main-icon' x1={size_tf*1/2} y1={size_tf*1/4} x2={size_tf*1/2} y2={size_tf*3/4}/>

    </svg>
  )
}

const IconSegment = ({ size, offsetX, offsetY, isTop }) => {
  return (
    <>
      <line className='main-icon' x1={size*1/2+offsetX} y1={size*1/2+offsetY} x2={size*3/4+offsetX} y2={size*3/8+offsetY}/>
      <line className='main-icon' x1={size*1/4+offsetX} y1={size*3/8+offsetY} x2={size*1/2+offsetX} y2={size*1/2+offsetY}/>
      {isTop && (
        <>
          <line className='main-icon' x1={size*1/2+offsetX} y1={size*1/4+offsetY} x2={size*1/4+offsetX} y2={size*3/8+offsetY}/>
          <line className='main-icon' x1={size*3/4+offsetX} y1={size*3/8+offsetY} x2={size*1/2+offsetX} y2={size*1/4+offsetY}/>
        </>
      )}

    </>
  )
}

export default Welcome