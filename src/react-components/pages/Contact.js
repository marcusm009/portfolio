import { Typography } from '@material-ui/core'

import { useState } from 'react'
import { Button } from '@material-ui/core'

const EMAIL_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzp6ZdgtfOM6Mz0BSM9KU8Gupa-pKaaJk0iGPCxzRDBb5nD4EZdb_9a8i_znB30nYIZ2w/exec'

const Contact = () => {
  const [form, setForm] = useState({
    'name': '',
    'email': '',
    'message': ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    
    let httpRequest = EMAIL_SCRIPT_URL
    httpRequest += '?name=' + encodeURI(form.name)
    httpRequest += '&email=' + encodeURI(form.email)
    httpRequest += '&message=' + encodeURI(form.message)
    
    fetch(httpRequest, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log(form)
    console.log('hello')
  }

  const handleChange = (event) => {
    const field = event.target.id
    const value = event.target.value
    
    let newForm = { ...form }
    newForm[field] = value
    setForm(newForm)
  }
  
  return (
    <>
      <Typography variant='h3' gutterBottom>Contact</Typography>
        <form>
          
          <Typography variant='h5'>Name</Typography>
          <input
            id='name'
            type='text'
            value={form.name}
            onChange={handleChange}
            placeholder='Your name...'
          />
          <br/><br/>

          <Typography variant='h5'>Email</Typography>
          <input
            id='email'
            type='text'
            value={form.email}
            onChange={handleChange}
            placeholder='Your email...'
          />
          <br/><br/>

          <Typography variant='h5'>Message</Typography>
          <textarea
            id='message'
            placeholder='Write something...'
            value={form.message}
            onChange={handleChange}
            style={{
              width: '100%',
              height: '100px'
            }}
          ></textarea>
          <br/><br/>

          <Button
            variant='contained'
            onClick={handleSubmit}
            >
            Submit
          </Button>
          <br/><br/>
        
        </form>
        <Typography variant='body2' color='textSecondary' component='p' gutterBottom>
          Please use the contact form above or send an email to: marcusm009@gmail.com
        </Typography>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
  )
}

export default Contact
