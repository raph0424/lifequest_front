import { useGLTF, useAnimations } from '@react-three/drei/native';
import { useEffect, useRef } from 'react';
import { Group, Mesh } from 'three';

export const Warrior = () => {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('https://lifequestbucket.s3.eu-west-3.amazonaws.com/character.glb');
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    console.log('GLTF loaded:', scene);
    console.log('Animations:', animations);

    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.reset().play();
    }

    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });

    return () => {
      mixer.stopAllAction();
      scene.traverse((child) => {
        if ((child as Mesh).geometry) (child as Mesh).geometry.dispose();
        if ((child as Mesh).material) {
          const material = child as Mesh;
          if (Array.isArray(material.material)) {
            material.material.forEach((m) => m.dispose());
          } else {
            material.material.dispose();
          }
        }
      });
    };
  }, [actions, mixer, scene]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} position={[0, -1.3, 0]} rotation={[0, -0.4, 0]} />
    </group>
  );
};
