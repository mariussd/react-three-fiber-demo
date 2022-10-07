import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Camera from "./components/Camera";
import { Physics } from "@react-three/cannon";
import PhysicsPlane from "./components/PhysicsPlane";
import PhysicsBox from "./components/PhysicsBox";

function App() {
  const [boxes, setBoxes] = useState([<PhysicsBox />]);

  return (
    <div className="App">
      <p>Hællæ</p>
      <button onClick={() => setBoxes([...boxes, <PhysicsBox />])}>
        Add box
      </button>
      <Canvas style={{ height: window.innerHeight, width: window.innerWidth }}>
        <Camera />
        <Physics>
          <Box position={[-1.2, 5, 0]} color="red" autoRotate scalable></Box>
          <Box position={[1.2, 5, 0]} color="cyan" autoRotate scalable></Box>
          <PhysicsPlane />
          {boxes}
        </Physics>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

export default App;
