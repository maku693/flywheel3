import { Sphere } from "@react-three/drei";

export default function MirrorBall(props) {
  return (
    <Sphere {...props}>
      <meshStandardMaterial
        metalness={1}
        roughness={0.1}
        color="yellow"
        flatShading={true}
      />
    </Sphere>
  );
}
