import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Avatar, Typography, Card, CardContent, useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: '.5rem'
  }
}))

const Overview = () => {
  const classes = useStyles()
  const shouldWrap = useMediaQuery('(min-width:900px)')

  return (
    <Card
      className={classes.root}
      style={{flexDirection: shouldWrap ? 'row' : 'column'}}>
      <Avatar src={'/portfolio/images/headshot.jpg'}
            style={{
              objectFit: 'cover',
              height: 'auto',
              width: '400px',
              maxWidth: '100%'
            }}
            alt="Me!" />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant='h4' gutterBottom>Overview</Typography>
        <Typography variant='h6'>Occupation: Software Engineer</Typography>
        <Typography variant='h6'>Company: Motorola Solutions</Typography>
        <Typography variant='h6'>Location: Denver, CO</Typography>
        <Typography variant='h6'>Total Experience: 5+ years</Typography>
        <Typography variant='h6'>Industry Experience: 1+ year</Typography>
      </CardContent>
    </Card>
  )
}

export default Overview