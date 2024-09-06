import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Computer } from "../Computer";
import CanvasLoader from "../Loader";


const ComputerCanvas = () => {
  

  return (
   <Canvas style={{ height: 350, width: 500 }}
    className=" rounded-xl z-100"
   
    >
      <ambientLight intensity={0.3} color="#ffffff" />
      <pointLight position={[2, 2, 2]} intensity={0.5}/>
      <mesh>
        <Computer scale={2} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ComputerCanvas;