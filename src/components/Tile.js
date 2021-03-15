import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

const Tile = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });
  
  return (
    <mesh
    {...props}
    ref={mesh}
    scale={[.9, .9, .45]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Tile