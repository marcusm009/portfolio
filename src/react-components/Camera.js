import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

const Camera = (props) => {
  const ref = useRef()
  const [active, setActive] = useState(false)
  const { setDefaultCamera } = useThree()

  useEffect(() => void setDefaultCamera(ref.current, []))

  useFrame(() => {
    ref.current.updateMatrixWorld()
  });
  
  return (
    <orthographicCamera ref={ref} {...props} />
  );
}

export default Camera