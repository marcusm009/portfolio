import FadeInSection from '../FadeInSection'

const darkGray = '#202020'

const Projects = ({ baseRoute }) => {
  return (
    <>
    <h1>Projects</h1>
    <br/>
        <h2>Political Bias Detector</h2>
        <img src={baseRoute + '/images/projects/poli-bias.jpg'}
          style={{
            height: '400px',
            width: '640px',
            maxWidth: '100%',
            height: 'auto'}}
          title='Political Bias Detector' />
        <p>
          This project uses a state-of-the-art GPT-2 model, hosted on a dockerized
          Python server on a Google cloud cluster to make predictions about political
          bias in text.
        </p>
        <p>
          This model underwent reinforcement training on 86,460 tweets from 200
          different US senators, using their party affiliation as the label.
        </p>
        <p>
          In order to query the model, we built a chrome extension that allows you to
          highlight text and send an HTTP request to the server. The results come back
          within a few seconds.
        </p>
        <p>
          You can find the chrome extension listed on the Chrome Web Store&nbsp;
          <a
            href="https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma"
            style={{
              color: 'purple',
              fontSize: '1rem',
              textDecoration: 'underline'
            }}
          >here</a>
        </p>
        <br/><br/><br/><br/><br/><br/>
      </>
  )
}

export default Projects
