import FadeInSection from '../FadeInSection'

import { Paper, Box, Grid, Typography, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ComputerIcon from '@material-ui/icons/Computer'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import CodeIcon from '@material-ui/icons/Code'

import CustomizedTimeline from '../CustomizedTimeline'
import Overview from '../Overview'

const darkGray = '#202020'

const useStyles = makeStyles(() => ({
  paper: {
    padding: '.5rem'
  }
}))

const About = ({ baseRoute }) => {
  const classes = useStyles()
  
  const cards = [
    {
      title: 'CS Interests',
      icon: <ComputerIcon/>,
      interests: [
        'Backend development',
        'Frontend development',
        'Machine learning'
      ]
    },
    {
      title: 'Extracurricular Interests',
      icon: <DirectionsRunIcon/>,
      interests: [
        'Investing / Economics',
        'Disc Golf',
        'Climbing',
        'Hiking',
        'Running',
        'Weightlifting'
      ]
    },
    {
      title: 'Languages / Frameworks',
      icon: <CodeIcon/>,
      interests: [
        'Python - Proficient',
        'Javascript - Experienced',
        'HTML / CSS - Experienced',
        'React.JS - Experienced',
        'Git - Experienced',
        'SQL - Experienced',
        'Node.js - Some knowledge'
      ]
    }
  ]

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
      {cards.map((card) => (
        <>
        <FadeInSection>  
          <Paper className={classes.paper}>
            {card.icon}
            <Typography variant='h4' gutterBottom>{card.title}</Typography>
            <Typography>
              <ul>
                {card.interests.map((interest) => (
                  <li>{interest}</li>
                  ))}
              </ul>
            </Typography>
          </Paper>
        </FadeInSection>
        <br/>
        </>
      ))}
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
