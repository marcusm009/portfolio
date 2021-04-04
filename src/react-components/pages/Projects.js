const Projects = ({ baseRoute }) => {
  return (
    <>
    <h1>Projects</h1>
        <img src={baseRoute + '/images/headshot.jpg'}
          style={{
            width: '500px',
            maxWidth: '100%',
            height: 'auto'}}
          title="Me!" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
      </>
  )
}

export default Projects
