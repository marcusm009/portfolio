import { useLocation } from 'react-router'
import Canvas from './Canvas'

const CanvasSwitcher = ({ pages, completeStageCallback, baseRoute }) => {
  const location = useLocation().pathname

  return (
    <>
    {pages.map((page, idx) => (
        <>
          {(page.completed) && (<page.component key={page.route} baseRoute={baseRoute}/>)}
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
