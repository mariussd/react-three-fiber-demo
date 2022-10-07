import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type Props = {
  position: [number, number, number];
  scalable?: boolean;
  autoRotate?: boolean;
  color?: string;
};

const Box = ({
  position,
  color = "orange",
  autoRotate = false,
  scalable = false,
}: Props) => {
  const mesh = useRef<Mesh>(null!);

  const [hovered, setHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  useFrame((state, delta) => {
    if (autoRotate) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active && scalable ? 1.5 : 1}
      onClick={() => setActive((active) => !active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : color} />
    </mesh>
  );
};

export default Box;
