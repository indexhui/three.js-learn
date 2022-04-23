import { useEffect, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

import zi from './zi.gltf';

const Model = ({ url }) => {
  const { nodes } = useGLTF(zi);
  // const geom = useLoader(STLLoader, url);
  // const ref = useRef();
  // const { camera } = useThree();
  // useEffect(() => {
  //   camera.lookAt(ref.current.position);
  // });
  return (
    <>
      <mesh
        geometry={nodes}
        material={nodes}
        material-emissive="red"
        material-roughness={1}
        dispose={null}
      />
    </>
  );
};

export default Model;
