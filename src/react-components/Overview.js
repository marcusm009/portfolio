import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Avatar, ButtonGroup, Button, IconButton, Typography, Card, CardContent, useMediaQuery } from '@material-ui/core'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DescriptionIcon from '@material-ui/icons/Description'

const Overview = () => {
  const shouldWrap = useMediaQuery('(min-width:900px)')

  return (
    <Card
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '.5rem',
        flexDirection: shouldWrap ? 'row' : 'column'
      }}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Avatar src={'/portfolio/images/headshot.jpg'}
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
        padding: '2rem'
        }}>
        <Typography variant='h4' gutterBottom>Overview</Typography>
        <Typography variant='h5'>Occupation: Software Engineer</Typography>
        <Typography variant='h5'>Company: Motorola Solutions</Typography>
        <Typography variant='h5'>Location: Denver, CO</Typography>
        <Typography variant='h5'>Total Experience: 5+ years</Typography>
        <Typography variant='h5'>Industry Experience: 1+ year</Typography>
      </CardContent>
    </Card>
  )
}

export default Overview