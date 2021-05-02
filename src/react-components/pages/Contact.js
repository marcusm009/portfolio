import { Avatar, Paper, Box, Grid, Typography, List, ListItem, Card, CardContent, CardMedia } from '@material-ui/core'

const EMAIL_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec";

const Contact = ({ baseRoute }) => {

  const test = (e) => {
    e.preventDefault();
    fetch(EMAIL_SCRIPT_URL)
    console.log('hello');
  }
  
  return (
    <>
      <Typography variant='h3' gutterBottom>Contact</Typography>
        <form
          // action="https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec"
          // method="POST"
          >
          
          <Typography variant='h5'>Name</Typography>
          <input id="name" type="text" placeholder="Your name.."/><br/>

          <Typography variant='h5'>Email</Typography>
          <input id="email" type="text" placeholder="Your email.."/><br/>

          <Typography variant='h5'>Message</Typography>
          <textarea
            id="message"
            placeholder="Write something.."
            style={{
              width: '100%',
              height: '100px'
            }}
          ></textarea><br/>

          <button
            onClick={test}
            style={{
              color: 'black'
            }}>
            Submit
          </button>
        </form>
        <Typography variant='body2' color='textSecondary' component='p' gutterBottom>
          Contact form under construction! In the mean time, please send any inquiries to: marcusm009@gmail.com
        </Typography>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
  )
}

export default Contact
