import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent,
         TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import { Card, CardContent, CardMedia, Typography, useMediaQuery} from '@material-ui/core'

import LaptopMacIcon from '@material-ui/icons/LaptopMac'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  }
}))

const CustomizedTimeline = () => {
  const classes = useStyles()
  const shouldAlternate = useMediaQuery('(min-width:600px)')

  const content = [
    {
      year: '2016-2020',
      icon: (<LaptopMacIcon />),
      image: {
        title: 'UF',
        link: 'about/uf.jpg'
      },
      title: 'B.S. in Computer Science',
      subtitle: 'University of Florida',
      content: 'Began pursing a BS in CS at the University of Florida'
    },
    {
      year: '2018-2020',
      icon: (<LaptopMacIcon />),
      image: {
        title: 'Research',
        link: 'about/fics.png'
      },
      title: 'Undergraduate Research Assistant',
      subtitle: 'Florida Institute of Cybersecurity',
      content: 'Became a machine learning research assistant at FICS under Vincent Bindschadler'
    },
    {
      year: '2020-',
      icon: (<LaptopMacIcon />),
      image: {
        title: 'Motorola',
        link: 'about/motorola.jpg'
      },
      title: 'Jr. Software Engineer',
      subtitle: 'Motorola Solutions',
      content: 'Became a full time software engineer at Motorola Solutions'
    },
    {
      year: '2021-',
      icon: (<LaptopMacIcon />),
      image: {
        title: 'OMSCS',
        link: 'about/omscs.png'
      },
      title: 'M.S. in Computer Science',
      subtitle: 'Georgia Institute of Technology',
      content: 'Currently pursuring a masters of science in computer science at Georgia Tech'
    },
    {
      year: '????',
      icon: (<LaptopMacIcon />),
      title: 'Future',
      content: 'Who knows what it will hold...'
    },
    
  ]

  return (
    <Timeline style={{flexGrow: 0}} className={classes.root}
      align={shouldAlternate ? 'alternate' : 'left'}>
      {content.map(info => (
        <TimelineItem>
          <TimelineOppositeContent style={{
            flexGrow: shouldAlternate ? 1 : 0
          }}>
            {info.year ? 
              (<Typography color='textSecondary'>{info.year}</Typography>) : 
              (<Typography style={{'color': 'white'}}>0000</Typography>)}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card className={classes.card}>
              {info.image && (
                <CardMedia
                className={classes.media}
                image={'/portfolio/images/' + info.image.link}
                title={info.image.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  {info.title}
                </Typography>
                <Typography gutterBottom variant='h6' style={{fontStyle:'italic'}}>
                  {info.subtitle}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {info.content}
                </Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default CustomizedTimeline