import React, { useRef  } from 'react';
import { Canvas, Vector3, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three'; 
import Planet from './Planet'
const isMobile = window.innerWidth <= 768; 
const MovingStars: React.FC = () => {
  const starsRef = useRef<THREE.Points | null>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.elapsedTime * 0.05; 
    }
  });

  return (
    <group>
      <Stars ref={starsRef} />
    </group>
  );
};


interface Props{
  positions: Vector3;
  moonPosition: Array<number> 
}


  const SolarSystem: React.FC<Props> = ({positions, moonPosition}) => {

    return (
      <div className='h-full w-full  absolute  z-0 '>
        <Canvas style={{ }}>
        <pointLight position={[0, 1, 5]} intensity={10}  distance={10}/>
          <ambientLight intensity={0.2} />
          <OrbitControls />
          <MovingStars />
          <Planet position={isMobile ? [0, 0, 0] : positions} />
          <ObjectsOnSphere  positions={moonPosition}/>
          
        </Canvas>
      </div>
    );
  };

const ObjectsOnSphere: React.FC<{ positions: Array<number> }> = ({positions}) => {
  const moonRef = useRef<THREE.Mesh | null>(null);
  var xx  = positions[0];
  var yy = positions[1];
  var zz= positions[2];
  if(moonRef.current) {  moonRef.current.position.set(xx, yy, 0);}
  useFrame(({ clock }) => {
  
    if (moonRef.current) {
     var yv = yy;
      const radius = 2.5;
      const angle = clock.elapsedTime * 1; 

      var x = radius *  Math.cos(angle);
      var z = - radius * Math.sin(angle);
      if(isMobile){
        yv = 0;
      }
    
    moonRef.current.position.set(x+xx, yv, z+zz);
    moonRef.current.position.z -=1; 
  
    }
  });

  return (
    <mesh ref={moonRef}  >
       
      <sphereGeometry args={[0.2, 32, 32]}  />
     
      <meshStandardMaterial color="white"  />
      
    </mesh>
  );
};


export default SolarSystem;
