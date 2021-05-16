import { useLocation, useHistory } from 'react-router'
import { useEffect, useState } from 'react'

import Canvas from './Canvas'
import Page from './Page'

const CanvasSwitcher = ({ pages, completeStageCallback, replayStageCallback, baseRoute, isiOS }) => {
  const location = useLocation().pathname
  const history = useHistory()
  const audioiOS = useState({
    'audioiOS': {
      'isiOS': isiOS,
      'controller': null,
      'source': null
    }
  })

  useEffect(() => {
    if(location === '/')
      history.push('/about')
  })

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
              Component={page.component}
              isActive={location === page.route}
              replayStageCallback={() => replayStageCallback(page.route)}
              nextLevel={pages[idx+1]}
              baseRoute={baseRoute}
            />}
          <Canvas
            level={page.route.replace('/','')}
            isActive={location === page.route}
            completeStageCallback={() => completeStageCallback(page.route)}
            isComplete={page.completed}
            baseRoute={baseRoute}
            isiOS={isiOS}
            />
        </>
    ))}
    </>
  )
}

export default CanvasSwitcher
