import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Typography, Button } from '@material-ui/core'

const messages = [
  'Welcome to my interactive portfolio',
  'website inspired by Bloxorz!',
]

const Welcome = ({ dismissWelcomePage, baseRoute }) => {
  const location = useLocation().pathname
  const [curMessages, setMessages] = useState(Array(messages.length).fill(''))
  
  const [directionsVis, setDirectionsVis] = useState(false)
  const [imgVis, setImgVis] = useState(false)
  const [tapClickVis, setTapClickVis] = useState(false)

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
    }
    else if(!directionsVis) {
      setTimeout(() => {
        setDirectionsVis(true)
      }, 500)
    }
    else if(!imgVis) {
      setTimeout(() => {
        setImgVis(true)
      }, 500)
    }
    else if(!tapClickVis) {
      setTimeout(() => {
        setTapClickVis(true)
      }, 500)
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
        onclick={() => {dismissWelcomePage()}}
      >
        {curMessages.map((msg, idx) => <Message msg={msg} idx={idx}/>)}
        <br/>
        <br/>
        <div style={{padding: '2rem'}}>
          <Typography
            className={directionsVis ? 'active' : 'fade'}
            variant='h4'>
            Beat the level to unlock the page or click the auto-solve button
          </Typography>
        </div>
        <br/>
        <img
        alt='Logo'
        className={imgVis ? 'active' : 'fade'}
        src={baseRoute + '/images/welcome/how-to-play.png'}
        style={{
          width: '800px',
          maxWidth: '80%',
          height: 'auto'
        }}/>

        <br/>
        <br/>
        <div style={{padding: '2rem'}}>
          <Typography
            className={tapClickVis ? 'active' : 'fade'}
            variant='h4'>
            Tap or click to get started!
          </Typography>
        </div>
        
      </div>
      </>
  )
}

const Message = ({ msg, idx }) => {
  return (
    msg === '<br>' ? <br/>
    : (
      <div>
        <Typography
          className={(msg.length === messages[idx].length) ? 'no-cursor' : ''}
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

export default Welcome
