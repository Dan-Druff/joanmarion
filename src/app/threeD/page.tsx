'use client';
import { VRButton, XR } from '@react-three/xr';
import styles from '../page.module.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls} from '@react-three/drei';

const ThreeDPage = () => {
    // const model = useLoader(GLTFLoader, "/models/suzy.gltf");
  return (
    <div className={styles.container}>
        {/* <VRButton /> */}
        <Canvas shadows>
            {/* <XR> */}
            <OrbitControls />
            <ambientLight intensity={0.5}/>
            <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                <planeGeometry args={[1000,1000]} />
                <meshStandardMaterial color="green" />
            </mesh>
            {/* <object3D position={[2,0,0]}>
                <primitive dispose={null} object={model.scene}></primitive>
            </object3D> */}
            {/* </XR> */}
        </Canvas>
    </div>
  )
}

export default ThreeDPage