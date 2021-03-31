import { useLocation } from 'react-router'
import Canvas from './Canvas'

const CanvasSwitcher = ({ pages, completeStageCallback }) => {
  const location = useLocation().pathname

  return (
    <>
    {pages.map((page, idx) => (
        <>
          {(page.completed) && (<page.component />)}
          <Canvas
            key={idx}
            level={page.route.replace('/','')}
            isActive={location === page.route}
            completeStageCallback={() => completeStageCallback(page.route)}
            isComplete={page.completed}
            template={page.template}
            />
        </>
    ))}
    </>
  )
}

export default CanvasSwitcher
