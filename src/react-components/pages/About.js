import FadeInSection from '../FadeInSection'

import { Paper, Box, Grid, Typography, List, ListItem } from '@material-ui/core'

import ComputerIcon from '@material-ui/icons/Computer'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import CodeIcon from '@material-ui/icons/Code'

import CustomizedTimeline from '../CustomizedTimeline'
import Overview from '../Overview'

const darkGray = '#202020'

const About = ({ baseRoute }) => {
  return (
    <>
      <Typography variant='h3' gutterBottom>About Me</Typography>
      <Overview />
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
