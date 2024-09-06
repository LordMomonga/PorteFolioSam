import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Od } from "../OD";

const Personnage = () => {
  

  return (
   <Canvas style={{ height: 400, width: 500 }}
    className=" rounded-xl z-100"
   
    >
      <ambientLight intensity={0.3} color="#ffffff" />
      <pointLight position={[2, 2, 2]} intensity={0.5}/>
      <mesh>
        <Od scale={0.5} />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Personnage;