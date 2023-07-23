import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Tilt } from 'react-tilt';
import { FBXLoader } from '@react-three/drei';

const FloatingFBX = () => {
  return (
    <Tilt>
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <FBXLoader url="client\public\Iphone\Iphone seceond version finished.fbx">
          {(fbx) => {
            return (
              <group>
                <primitive object={fbx} rotation={[0, 0, 0]} />
              </group>
            );
          }}
        </FBXLoader>
      </Canvas>
    </Tilt>
  );
};

export default FloatingFBX;
