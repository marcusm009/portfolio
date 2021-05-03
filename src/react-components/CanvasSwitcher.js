import { useLocation } from 'react-router'
import { useEffect } from 'react'

import { Container, Button, Grid } from '@material-ui/core'

import Canvas from './Canvas'
import Page from './Page'

const CanvasSwitcher = ({ pages, completeStageCallback, replayStageCallback, baseRoute }) => {
  const location = useLocation().pathname

  useEffect(() => {
    pages.forEach(element => {
      if (location === element.route) {
        let html = document.getElementsByTagName('html')[0]
        if (html) {
          if (element.completed) {
            html.style.touchAction = 'auto'
          } else {
            html.style.touchAction = 'none'
          }
        }
      }
    });
  })

  return (
    <>
    {pages.map((page, idx) => (
        <>
          {page.completed &&
            <Page
              key={page.route}
              Component={page.component}
              isActive={location === page.route}
              replayStageCallback={() => replayStageCallback(page.route)}
              nextLevel={pages[idx+1]}
              baseRoute={baseRoute}
            />}
          {(!page.completed && location === page.route) && (
            <>
              <h1 id='directions-text'>
                Beat the level to unlock the page!
              </h1>
              <Button
                variant='contained'
                onClick={() => completeStageCallback(page.route)}
                style={{
                  position: 'fixed',
                  margin: 'auto',
                  bottom: '2rem',
                  left: 0,
                  right: 0,
                  textAlign: 'center',
                  zIndex: '4'
                }}>
                Auto-solve
              </Button>
            </>
          )}
          <Canvas
            level={page.route.replace('/','')}
            isActive={location === page.route}
            completeStageCallback={() => completeStageCallback(page.route)}
            isComplete={page.completed}
            baseRoute={baseRoute}
            />
        </>
    ))}
    </>
  )
}

export default CanvasSwitcher
