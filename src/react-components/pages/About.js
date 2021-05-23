import FadeInSection from '../FadeInSection'

import { Paper, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ComputerIcon from '@material-ui/icons/Computer'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'
import CodeIcon from '@material-ui/icons/Code'

import CustomizedTimeline from '../CustomizedTimeline'
import Overview from '../Overview'

const useStyles = makeStyles(() => ({
  paper: {
    padding: '1rem'
  }
}))

const About = () => {
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
        'JavaScript - Experienced',
        'Git - Experienced',
        'HTML / CSS - Experienced',
        'React.JS - Acquiring knowledge',
        'SQL - Some knowledge',
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
          To become a master at my craft, write clean and reusable code, and make informed design decisions
        </Typography>
      </FadeInSection>
      <br/>
      {cards.map((card, i) => (
        <>
        <FadeInSection>  
          <Paper className={classes.paper}>
            {card.icon}
            <Typography variant='h4' gutterBottom>{card.title}</Typography>
            <ul>
              {card.interests.map((interest, j) => (
                <li key={`${i}-${j}`}><Typography>{interest}</Typography></li>
                ))}
            </ul>
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
