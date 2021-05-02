import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { Avatar, Typography, Card, CardContent, useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  }
}))

const Overview = () => {
  const classes = useStyles()
  const shouldWrap = useMediaQuery('(min-width:800px)')

  return (
    <Card
      className={classes.root}
      style={{flexDirection: shouldWrap ? 'row' : 'column'}}>
      <Avatar src={'/portfolio/images/headshot.jpg'}
            style={{
              objectFit: 'cover',
              height: '400px',
              width: '400px'
            }}
            alt="Me!" />
      <CardContent>
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