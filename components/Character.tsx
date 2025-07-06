import { useGLTF, OrbitControls, Stats, useProgress, Html, Circle } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(0)} % loaded</Html>;
}

const Character: React.FC = () => {
   const gltf = useGLTF('https://lifequestbucket.s3.eu-west-3.amazonaws.com/character.glb');

 console.log('Scene direct children:', gltf.scene.children);

  return (
<Canvas camera={{ position: [0, 1, 5] }} shadows>
      <ambientLight />
      <directionalLight position={[-1.3, 6.0, 4.4]} castShadow intensity={Math.PI * 1} />
      <hemisphereLight intensity={0.5} />

     <Suspense fallback={<Loader />}>
  <ambientLight intensity={0.5} />
  <hemisphereLight intensity={0.5} />
  <directionalLight position={[0, 5, 5]} intensity={1} />
  
  <primitive
    object={gltf.scene}
    scale={[2, 2, 2]}
    position={[0, 0, 0]}
    rotation={[0, 0, 0]}
    castShadow
  />
</Suspense>

      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <Stats />
    </Canvas>
  );
};

export default Character;
