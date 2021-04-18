const EMAIL_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec";

const Contact = ({ baseRoute }) => {

  const test = (e) => {
    e.preventDefault();
    fetch(EMAIL_SCRIPT_URL)
    console.log('hello');
  }
  
  return (
    <>
      <h1>Contact</h1>
        <form
          // action="https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec"
          // method="POST"
          >
          
          <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input id="name" type="text" placeholder="Your name.."/><br/>

          <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input id="email" type="text" placeholder="Your email.."/><br/>

          <label for="subject">Message</label><br/>
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
        <p>
          Contact form under construction! In the mean time, please send any inquiries to:
        </p>
        <p>
          marcusm009@gmail.com
        </p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
  )
}

export default Contact
