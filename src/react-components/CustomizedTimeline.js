import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent,
         TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import { Card, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function CustomizedTimeline() {
  const classes = useStyles()

  return (
    <Timeline align='alternate'>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant='body2' color='textSecondary'>
            2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="/portfolio/images/about/uf.jpg"
              title="UR"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                CS Student
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Began pursing a BS in CS at the University of Florida
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant='body2' color='textSecondary'>
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="/portfolio/images/about/fics.png"
              title="FICS"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Undergraduate Research Assistant
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Became a machine learning research assistant at Florida Institute of Cybersecurity
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant='body2' color='textSecondary'>
            2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary' variant='outlined'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image="/portfolio/images/about/motorola.jpg"
              title="Motorola Solutions"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Jr. Software Engineer
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Became a full time software engineer at Motorola Solutions
              </Typography>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='secondary'>
            <LaptopMacIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant='h6' component='h1'>
              Future
            </Typography>
            <Typography>Who knows what it will hold...</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}