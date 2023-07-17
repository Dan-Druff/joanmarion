import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Tree = () => {
    const TreeModel = useLoader(GLTFLoader,'/models/tree1.glb');
  return (
    <primitive object={TreeModel.scene}>
  
    </primitive>
  )
}

export default Tree