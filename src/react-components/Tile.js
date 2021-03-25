import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

const Tile = (props) => {
  const [active, setActive] = useState(false);
  
  return (
    <mesh
    {...props}
    scale={[.9, .9, .45]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Tile