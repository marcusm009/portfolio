import { useLocation } from 'react-router'
import Canvas from './Canvas'

const CanvasSwitcher = ({ pages, completeStageCallback }) => {
  const location = useLocation().pathname

  return (
    <>
    {pages.map((page, idx) => (
        <>
          <Canvas
            key={idx}
            level={page.route.replace('/','')}
            isActive={location === page.route}
            completeStageCallback={() => completeStageCallback(page.route)}
            />
          {(page.completed) && (<page.component />)}
        </>
    ))}
    </>
  )
}

export default CanvasSwitcher
