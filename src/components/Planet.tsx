import { useRef, useEffect, useState  } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF, GLTFLoader } from 'three-stdlib'
import {  useFrame, useLoader} from '@react-three/fiber';


type GLTFResult = GLTF & {
  nodes: {
    Object_Planet_0: THREE.Mesh
  }
  materials: {
    Planet: THREE.MeshStandardMaterial
  }
}
export default function Planet(props: JSX.IntrinsicElements['group']) {

  const meshRef = useRef<THREE.Mesh | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Função para atualizar o estado com a largura atual da janela
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);



  const { nodes, materials } = useGLTF('../public/models/scene.gltf') as GLTFResult
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001; 
      
    }
  });

  const isMobile = windowWidth <= 768;

  if (materials.Planet && isMobile) {
    materials.Planet.opacity = 0.1;
    materials.Planet.transparent = true;
  }
  return (

    <group {...props} dispose={null} >
       <mesh ref={meshRef} geometry={nodes.Object_Planet_0.geometry} material={materials.Planet}rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}