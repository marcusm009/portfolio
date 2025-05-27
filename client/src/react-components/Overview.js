import { Avatar, ButtonGroup, Button, Typography, Card, CardContent, useMediaQuery } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'

import { RESOURCES_BASE_URL } from '../constants'

const Overview = () => {
  const summaryOnSide = useMediaQuery('(min-width:900px)')
  const largerText    = useMediaQuery('(min-width:500px)')

  return (
    <Card
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '.5rem',
        flexDirection: summaryOnSide ? 'row' : 'column'
      }}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Avatar src={`${RESOURCES_BASE_URL}/images/headshot.jpg`}
              style={{
                objectFit: 'cover',
                height: 'auto',
                width: '400px',
                maxWidth: '100%',
                margin: 'auto'
              }}
              alt="Me!" />
        <ButtonGroup style={{
          display: 'flex',
          marginTop: '.5rem'
          }}>
          <Button
          variant='contained'
          startIcon={<GitHubIcon/>}
          href='https://github.com/marcusm009'
          style={{
            backgroundColor: '#24292e',
            color: 'white',
            flexGrow: 1
            }}>
            GitHub
          </Button>
          <Button
          variant='contained'
          startIcon={<LinkedInIcon/>}
          href='https://www.linkedin.com/in/mmills926/'
          style={{
            backgroundColor: '#0a66c2',
            color: 'white',
            flexGrow: 1
            }}>
            LinkedIn
          </Button>
          <Button
          variant='contained'
          startIcon={<DescriptionIcon/>}
          href='https://drive.google.com/file/d/1D42JrNZSsBVvPeno8waztfLepSoqsC1Z/view?usp=sharing'
          style={{
            backgroundColor: 'red',
            color: 'white',
            flexGrow: 1
            }}>
            Résumé
          </Button>
        </ButtonGroup>
      </div>
      <CardContent style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: '1rem'
        }}>
        <Typography
          variant='h4'
          gutterBottom
          style={{fontWeight: 'bold'}}>
            Overview
        </Typography>
        <OverviewItem label='Occupation' value='Software Engineer' largerText={largerText}/>
        <OverviewItem label='Company' value='Charles Schwab' largerText={largerText}/>
        <OverviewItem label='Location' value='Denver, CO' largerText={largerText}/>
        <OverviewItem label='Industry Experience' value='5+ years' largerText={largerText}/>
      </CardContent>
    </Card>
  )
}

const OverviewItem = ({ label, value, largerText }) => {
  return (
    <Typography variant={largerText ? 'h5' : 'h6'}><span style={{fontWeight: 'bold'}}>{label}:</span> {value}</Typography>
  )
}

export default Overview