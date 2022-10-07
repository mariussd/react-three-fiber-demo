import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";

const PhysicsPlane = () => {
  const [ref] = usePlane(
    () => ({
      rotation: [-Math.PI / 2, 0, 0],
    }),
    useRef<Mesh>(null)
  );
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  );
};

export default PhysicsPlane;
