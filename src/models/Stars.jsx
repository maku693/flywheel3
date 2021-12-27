import { useMemo } from "react";
import { Float32BufferAttribute } from "three";

export default function Stars({ count = 500, size = 100, color = "white" }) {
  const points = useMemo(() => {
    const vertices = [];
    for (let i = 0; i < count; i++) {
      const x = size * (Math.random() - 0.5);
      const y = size * (Math.random() - 0.5);
      const z = size * (Math.random() - 0.5);
      vertices.push(x, y, z);
    }
    return new Float32BufferAttribute(vertices, 3);
  }, [count, size]);
  return (
    <mesh>
      <points>
        <bufferGeometry attach="geometry" attributes={{ position: points }} />
        <pointsMaterial attach="material" color={color} />
      </points>
    </mesh>
  );
}
