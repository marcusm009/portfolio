import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

const Player = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  
  return (
    <mesh
    {...props}
    ref={mesh}
    scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
    onClick={(e) => setActive(!active)}>
      <boxBufferGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

export default Player