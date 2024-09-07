import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Od } from "../OD";
import { motion } from "framer-motion";
const Personnage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
   <Canvas style={isMobile ? { height: 300, width: 350 }: { height: 400, width: 500 }}
    className=" rounded-xl z-100 "
   
    >
      <ambientLight intensity={0.3} color="#ffffff" />
      <pointLight position={[2, 2, 2]} intensity={0.1}/>
      <mesh position={[0, -1.8, 2.2]} >
        <Od scale={0.5} positio />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default Personnage;