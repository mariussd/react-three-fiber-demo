import { extend, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { PerspectiveCamera } from "three";
import { OrbitControls } from "three-stdlib/controls/OrbitControls";
import type { Node } from "@react-three/fiber";

extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

const Camera = () => {
  const cameraRef = useRef<PerspectiveCamera>(null);
  const controlsRef = useRef<OrbitControls>(null);

  const { gl, camera } = useThree();
  const set = useThree((state) => state.set);
  const size = useThree((state) => state.size);

  useLayoutEffect(() => {
    if (!cameraRef.current) return;
    cameraRef.current.aspect = size.width / size.height;
    cameraRef.current.updateProjectionMatrix();
  }, [size]);

  useLayoutEffect(() => {
    const camera = cameraRef.current;
    if (!camera) return;
    set(() => ({ camera }));
  }, []);

  useFrame(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.updateMatrixWorld();
    controlsRef.current.update();
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 5, 15]} />
      <orbitControls
        enableDamping
        ref={controlsRef}
        args={[camera, gl.domElement]}
        dampingFactor={0.2}
        rotateSpeed={0.5}
      />
    </>
  );
};

export default Camera;
