import { useLocation } from 'react-router'
import Canvas from './Canvas'

const CanvasSwitcher = ({ buttons }) => {
  const location = useLocation().pathname
  
  return (
    <>
    {buttons.map((button, idx) => (
        <Canvas key={idx} level={button.route.replace('/','')} isActive={location === button.route}/>
    ))}
    </>
  )
}

export default CanvasSwitcher
