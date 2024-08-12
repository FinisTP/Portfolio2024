import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2 }));

  useFrame((state, delta) => {
    let val = Math.sin(state.clock.getElapsedTime() / 10) * 20 + 10;
    ref.current.scale.x = val;
    ref.current.scale.y = val;
    ref.current.scale.z = val;

    let rotVal = Math.sin(state.clock.getElapsedTime() / 4) / 10;
    ref.current.rotation.x = rotVal;
    ref.current.rotation.y = rotVal;
    ref.current.rotation.z = rotVal;

    // position y in sine function
    ref.current.position.z = Math.sin(state.clock.getElapsedTime() / 2) * 10 - 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          // white
          color = "white"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
