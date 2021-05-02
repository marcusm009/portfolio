import FadeInSection from '../FadeInSection'
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@material-ui/lab'

import { Avatar, Paper, Box, Grid, Typography, List, ListItem } from '@material-ui/core'

import ComputerIcon from '@material-ui/icons/Computer'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import CodeIcon from '@material-ui/icons/Code'

import CustomizedTimeline from '../CustomizedTimeline'

const darkGray = '#202020'

const About = ({ baseRoute }) => {
  return (
    <>
      <Typography variant='h3' gutterBottom>About Me</Typography>
      <Paper>
        <div style={{
          display: 'flex'
        }}>
          <Avatar src={baseRoute + '/images/headshot.jpg'}
            style={{
              objectFit: 'cover',
              maxWidth: '400px',
              maxHeight: '400px',
              width: '50%',
              height: '50%'
              // height: '400px',
              // width: '400px'
            }}
            alt="Me!" />
            <div style={{
              height: '400px',
              padding: '2rem',
              // border: `3px solid ${darkGray}`,
              overflow: 'hidden'
            }}>
              <Typography variant='h4' gutterBottom style={{
                letterSpacing: '2px',
              }}>Overview</Typography>
              <Typography variant='h5'>Occupation: Software Engineer</Typography>
              <Typography variant='h5'>Company: Motorola Solutions</Typography>
              <Typography variant='h5'>Location: Denver, CO</Typography>
              <Typography variant='h5'>Total Experience: 5+ years</Typography>
              <Typography variant='h5'>Industry Experience: 1+ year</Typography>
            </div>
        </div>
      </Paper>
      <br/>
      <FadeInSection>  
        <Typography variant='h4' gutterBottom>Objective</Typography>
        <Typography>
          To make society more productive through the use of software solutions
        </Typography>
      </FadeInSection>
      <br/>
      <FadeInSection>  
        <Paper>
          <ComputerIcon/>
          <Typography variant='h4' gutterBottom>CS Interests</Typography>
          <Typography>
            <ul>
              <li>Backend Development</li>
              <li>Frontend Development</li>
              <li>Machine Learning</li>
            </ul>
          </Typography>
        </Paper>
      </FadeInSection>
      <FadeInSection>
        <Paper>
          <DirectionsRunIcon/>
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
        </Paper>
      </FadeInSection>
      <FadeInSection>
        <Paper>
          <CodeIcon/>
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
        </Paper>
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
