import FadeInSection from '../FadeInSection'
import Timeline from '../Timeline'

const darkGray = '#202020'

const About = ({ baseRoute }) => {
  return (
    <>
      <h1>About Me</h1>
      <div style={{
        display: 'flex'
      }}>
        <img src={baseRoute + '/images/headshot.jpg'}
          style={{
            objectFit: 'cover',
            maxWidth: '400px',
            maxHeight: '400px',
            width: '50%'
          }}
          title="Me!" />
          <div style={{
            height: '400px',
            padding: '2rem',
            border: `3px solid ${darkGray}`,
            overflow: 'hidden'
          }}>
            <h2 style={{
              letterSpacing: '2px',
              // textDecoration: 'underline'
            }}>Overview</h2>
            <h3>Occupation: Software Engineer</h3>
            <h3>Company: Motorola Solutions</h3>
            <h3>Location: Denver, CO</h3>
            <h3>Total Experience: 5+ years</h3>
            <h3>Industry Experience: 1+ year</h3>
          </div>
      </div>
      <br/>
      <FadeInSection>  
        <h2>Objective</h2>
        <p>
          To make society more productive through the use of software solutions
        </p>
      </FadeInSection>
      <FadeInSection>  
        <h2>CS Interests</h2>
        <ul>
          <li>Backend Development</li>
          <li>Frontend Development</li>
          <li>Machine Learning</li>
        </ul>
      </FadeInSection>
      <FadeInSection>
        <h2>Extracurricular Interests</h2>
        <ul>
          <li>Investing / Economics</li>
          <li>Disc Golf</li>
          <li>Climbing</li>
          <li>Hiking</li>
          <li>Running</li>
          <li>Weightlifting</li>
        </ul>
      </FadeInSection>
      <FadeInSection>
        <h2>Languages / Frameworks</h2>
        <ul>
          <li>Python - Proficient</li>
          <li>Javascript - Experienced</li>
          <li>HTML / CSS - Experienced</li>
          <li>React.JS - Experienced</li>
          <li>Git - Experienced</li>          
          <li>SQL - Experienced</li>
          <li>Node.JS - Some knowledge</li>
        </ul>
      </FadeInSection>
      <h2>Timeline</h2>
      <Timeline />
    </>
  )
}

export default About
