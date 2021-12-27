/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import modelUrl from "./dragon.gltf";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.dragon.geometry}
        // material={materials["Default OBJ.001"]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          attach="material"
          color="red"
          roughness={0}
          metalness={0}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(modelUrl);
