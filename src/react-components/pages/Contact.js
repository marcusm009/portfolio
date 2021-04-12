const Contact = ({ baseRoute }) => {
  return (
    <>
      <h1>Contact</h1>
        <form>
          <label>First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" placeholder="Your name.."/><br/>

          <label>Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" placeholder="Your last name.."/><br/>

          <label>Organization&nbsp;&nbsp;</label>
          <input type="text" placeholder="Your organization's name.."/><br/>

          <label for="subject">Message</label><br/>
          <textarea
            placeholder="Write something.."
            style={{
              width: '100%',
              height: '100px'
            }}
          ></textarea><br/>

          <input
            type="submit"
            value="Submit"
            disabled/>
        </form>
        <p>
          Contact form under construction! In the mean time, please send any inquiries to:
        </p>
        <p>
          marcusm009@gmail.com
        </p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
      </>
  )
}

export default Contact
