import { useRef, useState } from 'react'
import { useFrame, useResource } from 'react-three-fiber'

const Player = (props) => {
  const [position, setPosition] = useState(props.position)
  const [rotation, setRotation] = useState(props.rotation)
  const [isFalling, setFall] = useState(false)

  useFrame((state, delta) => {
    if(onGrid(position)) {
      if(!overTile(position, props.template))
        setFall(true)
    }

    if(isFalling) {
      const fallPosition = [position[0], position[1], -10000]
      setPosition(calcNewVectorBasedOnLimit(position, fallPosition, props.maxVel))
    } else {
      setPosition(calcNewVectorBasedOnLimit(position, props.goto.position, props.maxVel))
      setRotation(calcNewVectorBasedOnLimit(rotation, props.goto.rotation, props.maxRotVel));
    }
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

const addVectors = (vectA, vectB) => {
  return vectA.map((comp, idx) => comp + vectB[idx])
}

const multVectorByScalar = (vect, scal) => {
  return vect.map(comp => comp * scal)
}

const calcNewVectorBasedOnLimit = (prevVect, newVect, limit) => {
  const diff = addVectors(newVect, multVectorByScalar(prevVect, -1))
  const limitedDiff = diff.map(comp => (comp > 0) ? Math.min(comp, limit) : Math.max(comp, -limit))
  return addVectors(prevVect, limitedDiff)
}

const onGrid = (pos) => {
  return Math.round(pos[0]) == pos[0] && Math.round(pos[1]) == pos[1]
}

const overTile = (pos, template) => {
  if (pos[0] < 0 || pos[1] < 0 || pos[0] > template.length || pos[1] > template[0].length)
    return false
  return template[pos[0]][pos[1]] == 'x'
}

export default Player