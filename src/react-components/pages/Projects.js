import { Typography, Card, CardContent, CardMedia } from '@material-ui/core'

const Projects = () => {
  return (
    <>
    <Typography variant='h3' gutterBottom>Projects</Typography>
    <Card>
      <CardMedia
        style={{
          height: '200px',
          backgroundSize: 'contain'}}
        image='/portfolio/images/projects/poli-bias.jpg'
        title='Political Bias Detector'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          Political Bias Detector
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p' gutterBottom>
          This project uses a state-of-the-art GPT-2 model, hosted on a dockerized
          Python server on a Google cloud cluster to make predictions about political
          bias in text.
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p' gutterBottom>
          This model underwent reinforcement training on 86,460 tweets from 200
          different US senators, using their party affiliation as the label.
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p' gutterBottom>
          In order to query the model, we built a chrome extension that allows you to
          highlight text and send an HTTP request to the server. The results come back
          within a few seconds.
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          You can find the chrome extension listed on the Chrome Web Store&nbsp;
            <a
              href='https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma'
              style={{
                color: 'purple',
                fontSize: '1rem',
                textDecoration: 'underline'
              }}
            >here</a>
          </Typography>
      </CardContent>
    </Card>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  )
}

export default Projects
