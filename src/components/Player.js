import { useRef, useState } from 'react'
import { useFrame, useResource } from 'react-three-fiber'

const calcNewVectorBasedOnLimit = (prevVect, newVect, limit) => {
  const diff = newVect.map((comp, idx) => comp - prevVect[idx])
  const limitedDiff = diff.map(comp => (comp > 0) ? Math.min(comp, limit) : Math.max(comp, -limit))
  return prevVect.map((comp, idx) => comp + limitedDiff[idx])
}

const Player = (props) => {
  const [position, setPosition] = useState(props.position)
  const [rotation, setRotation] = useState(props.rotation)

  useFrame((state, delta) => {
    setPosition(calcNewVectorBasedOnLimit(position, props.goto.position, props.maxVel))
    setRotation(calcNewVectorBasedOnLimit(rotation, props.goto.rotation, props.maxRotVel));
  });

  return (
    <mesh
    {...props}
    position={position}
    rotation={rotation}
    scale={[.9, .9, .9]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Player