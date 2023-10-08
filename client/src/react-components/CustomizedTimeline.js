import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent,
         TimelineOppositeContent, TimelineDot } from '@material-ui/lab'
import { Card, CardContent, CardMedia, Typography, useMediaQuery} from '@material-ui/core'

import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import SchoolIcon from '@material-ui/icons/School'
import MenuBookIcon from '@material-ui/icons/MenuBook'

const CustomizedTimeline = () => {
  const shouldAlternate = useMediaQuery('(min-width:600px)')

  const content = [
    {
      year: '2016-2020',
      icon: (<SchoolIcon />),
      image: {
        title: 'UF',
        link: 'about/uf.png'
      },
      title: 'B.S. in Computer Science',
      subtitle: 'University of Florida',
      content: ["In 2016, I began pursuing a bachelor's degree in computer science at the University of Florida. I graduated in 2020 with my bachelor's, as well as a minor in Statistics."],
      skills: ['Programming Fundamentals', 'Data Structures & Algorithms', 'Software Engineering', 'Operating Systems']
    },
    {
      year: '2018-2020',
      icon: (<MenuBookIcon />),
      image: {
        title: 'Research',
        link: 'about/fics.png'
      },
      title: 'Undergraduate Research Assistant',
      subtitle: 'Florida Institute of Cybersecurity',
      content: ['In 2018, I became a research assistant for Dr. Vincent Bindschadler. We discovered new methods to extract meta-data from black box machine learning models.'],
      skills: ['Python', 'Machine Learning', 'Membership Inference']
    },
    {
      year: '2020-Pres.',
      icon: (<LaptopMacIcon />),
      image: {
        title: 'Motorola',
        link: 'about/motorola.jpg'
      },
      title: 'Jr. Software Engineer',
      subtitle: 'Motorola Solutions',
      content: ['After interning at Motorola Solutions in 2019, I joined the Software Engineer in Test (SET) team as a full time engineer shortly after graduating.',
                'I spearheaded multiple initiatives such as creating a Linux version of our tool used to flash radios, developing a system to automatically detect new failures when firmware was checked in, designing an interactive web page used to view information about our automated test system, and much more!'],
      skills: ['Python', 'Test Driven Development', 'Web Development', 'SQL', 'Git', 'Jira', 'C#']
    },
    {
      year: '2021-Pres.',
      icon: (<SchoolIcon />),
      image: {
        title: 'OMSCS',
        link: 'about/omscs.png'
      },
      title: 'M.S. in Computer Science',
      subtitle: 'Georgia Institute of Technology',
      content: ["I will begin pursuing my master's degree online in Fall of 2021 at Georgia Tech. My specialization will be in Computing Systems"],
      skills: ['TBD']
    },
    
  ]

  return (
    <Timeline
    style={{
      flexGrow: 0,
      padding: 0
    }}
    align={shouldAlternate ? 'alternate' : 'left'
    }>
      {content.map((info, idx) => (
        <TimelineItem key={idx}>
          <TimelineOppositeContent style={{
            flexGrow: shouldAlternate ? 1 : 0,
            padding: 0,
            margin: '.25rem'
          }}>
            {info.year ? 
              (<Typography color='textSecondary'>{info.year}</Typography>) : 
              (<Typography style={{'color': 'white'}}>0000</Typography>)}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              {info.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{
            padding: 0,
            margin: '.25rem'
          }}>
            <Card>
              {info.image && (
                <CardMedia
                image={'/portfolio/images/' + info.image.link}
                title={info.image.title}
                style={{
                  backgroundSize: 'contain',
                  height: 140
                }}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant='h5'>
                  {info.title}
                </Typography>
                <Typography gutterBottom variant='h6' style={{fontStyle:'italic'}}>
                    {info.subtitle}
                  </Typography>
                {info.content.map((c) => {
                  return (
                    <Typography gutterBottom variant='body2' color='textSecondary' component='p'>
                      {c}
                    </Typography>)
                })}
                <Typography variant='body2' color='textPrimary' component='p' style={{fontWeight: 'bold'}}>
                  Skills: {info.skills.map((skill, idx) => skill + ((idx === info.skills.length - 1) ? '' : ', '))}
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