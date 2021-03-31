import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'

const About = () => {
  const active = useLocation().pathname == '/about'
  const [isFadingIn, setFadingIn] = useState(true)

  useEffect(
    () => {
      let timer = setTimeout(() => setFadingIn(false), 1000)

      return () => {
        clearTimeout(timer)
      }
    }, [])
  
  return (
      <div className={`site-body ${isFadingIn ? 'fade': ''} ${!isFadingIn && active ? 'active': ''}`}>
        <h1>About Me</h1>
        <img src="https://media.githubusercontent.com/media/marcusm009/marcusm009.github.io/main/images/headshot.jpg"
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet
          rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero
          soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur
          deserunt laudantium.
        </p>
      </div>
  )
}

export default About
