import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";


type Props = {
    isTesting:boolean
}
const AnimatedBox :React.FC<Props>= ({isTesting}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame(() => {
      if(meshRef.current){
        meshRef.current.rotation.x += 0.02;
      }
    })
   
  
   
    return (
       
            <mesh ref={meshRef} scale={[0.5,0.5,0.5]} position={[-2,1,0]} castShadow>
                <boxGeometry />
                <meshStandardMaterial color={"turquoise"}/>
            </mesh>
     
    )
  
  }

export default AnimatedBox