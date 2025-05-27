import { Typography, Card, CardContent, CardMedia, CardActions, IconButton, Tooltip, Chip } from '@material-ui/core'

import LinkIcon from '@material-ui/icons/Link'
import CodeIcon from '@material-ui/icons/Code'

import { RESOURCES_BASE_URL } from '../../constants'

const Projects = () => {
  return (
    <>
    <Typography variant='h3' gutterBottom>Projects</Typography>
    <Project
      title='Political Bias Detector'
      text={[
        (<>
          This project uses a state-of-the-art GPT-2 model, hosted on a dockerized
          Python server on a Google cloud cluster to make predictions about political
          bias in text.
        </>),
        (<>
          This model underwent reinforcement training on 86,460 tweets from 200
          different US senators, using their party affiliation as the label.
        </>),
        (<>
          In order to query the model, we built a chrome extension that allows you to
          highlight text and send an HTTP request to the server. The results come back
          within a few seconds.
        </>)
      ]}
      imgSrc={RESOURCES_BASE_URL + '/images/projects/poli-bias.jpg'}
      codeSrc='https://github.com/marcusm009/political-bias-detector'
      link='https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma'
      />
      <br/>
      <Project
      title='This Portfolio Site'
      text={[
        (<>
          This website was inspired by another porfolio website made using Three.js
          by Bruno Simon (bruno-simon.com).
        </>),
        (<>
          I liked the idea of combining a game with a functional portfolio website and
          knew that I wanted it to be Bloxorz' themed. I began by building the game
          portion using Three.js and building the page portion using basic HTML, CSS,
          JavaScript, and jQuery. As the page portion of the website began to get more
          advanced, and my curiosity in front-end frameworks began to grow, I decided
          to adopt React.JS. I also eventually adopted Material UI and SCSS.
        </>),
        (<>
          I plan to eventually add a back-end using Node.JS, more pages (such as a blog
          and individual topic pages), more advanced mechanics to the game, and more
          levels.
        </>)
      ]}
      imgSrc={RESOURCES_BASE_URL + '/images/projects/react-website.png'}
      imgBg='#202020'
      codeSrc='https://github.com/marcusm009/portfolio'
      isItalic
      />
    <br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}

const Project = ({ title, text, imgSrc, codeSrc, link, imgBg, isItalic }) => {
  return (
    <Card>
      <CardMedia
        style={{
          height: '200px',
          backgroundSize: 'contain',
          backgroundColor: imgBg
        }}
        image={imgSrc}
        title={title}
      />
      <CardContent>
        <Typography
        gutterBottom
        variant='h5'
        component='h2'
        style={{
          fontStyle: isItalic ? 'italic' : 'normal'
        }}>
          {title}
        </Typography>
          {text.map(t => (
            <Typography variant='body2' color='textSecondary' component='p' gutterBottom>{t}</Typography>
          ))}
      </CardContent>
      <CardActions>
        {codeSrc && (
          <Tooltip title='View source code'>
            <IconButton href={codeSrc}>
              <CodeIcon/>
            </IconButton>
          </Tooltip>
        )}
        {link && (
          <Tooltip title='See it in action'>
            <IconButton href={link}>
              <LinkIcon/>
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  )
}

export default Projects
