import { useRef, useState } from 'react'
import { useFrame, useResource } from 'react-three-fiber'

const Player = (props) => {
  const [initialState, setInitialState] = useState({
    position: props.spawnPos,
    rotation: props.spawnRot,
    velocity: [0,0,0],
    rotVelocity: [0,0,0],
    // nextMove: props.nextMove,
    isMoving: false,
    isFalling: false,
    isDead: false
  })
  const [state, setState] = useState(initialState)
  const mesh = useRef(null)

  useFrame((st, del) => {
    let curState = {}
    curState = Object.assign(curState, state)

    if(!curState.isDead) {
      // Needs to update state when on grid
      if(onGrid(curState.position)) {
        // Must set falling state to add gravity and stop lateral movements
        if(!overTile(curState.position, props.template))
          curState.isFalling = true
        
        curState.rotation = [0,0,0] // Note: rotation is reset to make movement more predictable;
                                    //       need to come up with better method for non-cubes
        // curState.velocity = [0,0,0]
        // curState.rotVelocity = [0,0,0]
      }

      // If currently falling, only update velocity from gravity
      if(curState.isFalling) {
        curState.velocity = addVectors([0, 0, curState.velocity[2]], [0, 0, -props.gravity])
      }
      if(curState.canMove) {
          const movement = move(props.nextMove, curState.position, curState.rotation, props.maxVel, props.maxRotVel)
          console.log(props.nextMove)
          curState.velocity = movement.vel
          curState.rotVelocity = movement.rotVel
      }
      // else {
      //   console.log(curState.canMove)
      // }

      // Update position and rotation
      curState.position = addVectors(curState.position, curState.velocity)
      curState.rotation = addVectors(curState.rotation, curState.rotVelocity)

      // Set dead state
      if(curState.position[2] < -10)
        curState.isDead = true;
    } else {
      // Respawn
      curState = Object.assign(curState, initialState)
    }

    setState(curState)
  });

  return (
    <mesh
    {...props}
    ref={mesh}
    position={state.position}
    rotation={state.rotation}
    scale={[.9, .9, .9]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

const vectorEquals = (vectA, vectB) => {
  return vectA.every((comp, idx) => comp === vectB[idx])
}

const addVectors = (vectA, vectB) => {
  return vectA.map((comp, idx) => comp + vectB[idx])
}

const multVectorByScalar = (vect, scal) => {
  return vect.map(comp => comp * scal)
}

const calcMagnitudeLimitedDiff = (prevVect, newVect, limit) => {
  const diff = addVectors(newVect, multVectorByScalar(prevVect, -1))
  return diff.map(comp => (comp > 0) ? Math.min(comp, limit) : Math.max(comp, -limit))
  // return addVectors(prevVect, limitedDiff)
}

const onGrid = (pos) => {
  return Math.round(pos[0]) == pos[0] && Math.round(pos[1]) == pos[1]
}

const overTile = (pos, template) => {
  if (pos[0] < 0 || pos[1] < 0 || pos[0] > template.length || pos[1] > template[0].length)
    return false
  return template[pos[1]][pos[0]] == 'x'
}

const move = (dir, pos, rot, maxVel, maxRotVel) => {
  let goToPos = pos;
  let goToRot = rot;
  
  switch(dir) {
    case 'up':
      goToPos = addVectors(pos, [0,1,0])
      goToRot = addVectors(rot, [-Math.PI/2,0,0])
      break
    case 'down':
      goToPos = addVectors(pos, [0,-1,0])
      goToRot = addVectors(rot, [Math.PI/2,0,0])
      break
    case 'right':
      goToPos = addVectors(pos, [1,0,0])
      goToRot = addVectors(rot, [0,Math.PI/2,0])
      break
    case 'left':
      goToPos = addVectors(pos, [-1,0,0])
      goToRot = addVectors(rot, [0,-Math.PI/2,0])
  }

  return {
    'vel': calcMagnitudeLimitedDiff(pos, goToPos, maxVel),
    'rotVel': calcMagnitudeLimitedDiff(rot, goToRot, maxRotVel)
  }
}

export default Player