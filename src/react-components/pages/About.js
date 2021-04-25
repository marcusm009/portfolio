import FadeInSection from '../FadeInSection'
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab'

import { Box, Typography, List, ListItem } from '@material-ui/core'

import CustomizedTimeline from '../CustomizedTimeline'

const darkGray = '#202020'

const About = ({ baseRoute }) => {
  return (
    <>
      <Typography variant='h3' gutterBottom>About Me</Typography>
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
        <Typography variant='h4' gutterBottom>Objective</Typography>
        <Typography>
          To make society more productive through the use of software solutions
        </Typography>
      </FadeInSection>
      <br/>
      <FadeInSection>  
      <Typography variant='h4' gutterBottom>CS Interests</Typography>
        <Typography>
          <ul>
            <li>Backend Development</li>
            <li>Frontend Development</li>
            <li>Machine Learning</li>
          </ul>
          </Typography>
      </FadeInSection>
      <FadeInSection>
        <Typography variant='h4' gutterBottom>Extracurricular Interests</Typography>
        <Typography>
          <ul>
            <li>Investing / Economics</li>
            <li>Disc Golf</li>
            <li>Climbing</li>
            <li>Hiking</li>
            <li>Running</li>
            <li>Weightlifting</li>
          </ul>
        </Typography>
      </FadeInSection>
      <FadeInSection>
        <Typography variant='h4' gutterBottom>Languages / Frameworks</Typography>
        <Typography>
          <ul>
            <li>Python - Proficient</li>
            <li>Javascript - Experienced</li>
            <li>HTML / CSS - Experienced</li>
            <li>React.JS - Experienced</li>
            <li>Git - Experienced</li>          
            <li>SQL - Experienced</li>
            <li>Node.JS - Some knowledge</li>
          </ul>
        </Typography>
      </FadeInSection>
      <FadeInSection>
        <Typography variant='h4' gutterBottom>Timeline</Typography>
          <Box style={{
            left: 0
          }}>
            <CustomizedTimeline />
          </Box>
      </FadeInSection>
      <br/><br/><br/><br/><br/>
    </>
  )
}

export default About
