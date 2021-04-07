import { useLocation } from 'react-router'
import { useEffect } from 'react'
import Canvas from './Canvas'
import Page from './Page'

const CanvasSwitcher = ({ pages, completeStageCallback, baseRoute }) => {
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
          {(page.completed) && (
          <Page
            key={page.route}
            Component={page.component}
            isActive={location === page.route}
            baseRoute={baseRoute}
          />)}
          {(!page.completed && location === page.route) && (
          <h1 id='directions-text'>
            Beat the level to unlock the page!
          </h1>
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
