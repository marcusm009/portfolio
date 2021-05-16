import { useState } from 'react'
import { Typography, Button, TextField } from '@material-ui/core'

const EMAIL_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzp6ZdgtfOM6Mz0BSM9KU8Gupa-pKaaJk0iGPCxzRDBb5nD4EZdb_9a8i_znB30nYIZ2w/exec'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [error, setError] = useState({
    name: false,
    email: false
  })
  const [emailSent, setEmailSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    let httpRequest = EMAIL_SCRIPT_URL
    httpRequest += '?name=' + encodeURI(form.name)
    httpRequest += '&email=' + encodeURI(form.email)
    httpRequest += '&message=' + encodeURI(form.message)
    
    if(form.name !== '' && form.email !== '') {
      fetch(httpRequest, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      setEmailSent(true)
    } else {
      setError({
        name: form.name === '',
        email: form.email === ''
      })
    }
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
            <TextField 
              id='name'
              label='Full Name'
              placeholder='Your name...'
              value={form.name}
              onChange={handleChange}
              variant='outlined'
              error={error.name && form.name === ''}
              helperText={
                error.name && form.name === '' && 'Name is required'
              }
              fullWidth
              required
            />
            <br/><br/>
            <TextField 
              id='email'
              label='Email'
              placeholder='Your email...'
              value={form.email}
              onChange={handleChange}
              variant='outlined'
              error={error.email && form.email === ''}
              helperText={
                error.email && form.email === '' && 'Email is required'
              }
              fullWidth
              required
            />
            <br/><br/>
            <TextField 
              id='message'
              label='Message'
              placeholder='Write something...'
              value={form.message}
              onChange={handleChange}
              variant='outlined'
              multiline
              fullWidth
              rows={2}
              rowMax={4}
            />
            <br/><br/>

            {!emailSent && (
              <Button
                variant='contained'
                onClick={handleSubmit}
                >
                Submit
              </Button>
            )}
            {emailSent && (
              <>
                <Typography variant='h6'>
                  Email sent!
                </Typography>
                <Typography variant='body2'>
                  Thanks for contacting me! I will get back to you as soon as possible!
                </Typography>
              </>
            )}

            <br/><br/>
          </form>
        
        <Typography variant='body2' color='textSecondary' component='p'>
          Please use the contact form above or send an email to: marcusm009@gmail.com
        </Typography>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
  )
}

export default Contact
