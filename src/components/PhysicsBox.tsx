import { BoxProps, useBox } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";
import Box from "./Box";

const PhysicsBox = () => {
  const [ref] = useBox(
    () => ({ mass: 1, position: [0, 10, 0] }),
    useRef<Mesh>(null)
  );

  return (
    <mesh ref={ref}>
      <Box position={[0, 0, 0]} color="red" />
    </mesh>
  );
};
export default PhysicsBox;
