import { Flex } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const Test = () => {
  return (
    <Flex w="100%" h="560px">
      <Canvas>
        <Model />
        <mesh>
          <boxBufferGeometry />
          <meshPhongMaterial />
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </Flex>
  );
};

export default Test;
