import { useFrame } from "@react-three/fiber";
import { useAtomValue } from "jotai/utils";
import { useRef } from "react";
import { bpsAtom } from "../atoms";

export default function BeatScale({
  scale = [1, 1, 1],
  offset = [1, 1, 1],
  power = 1,
  children,
}) {
  const bps = useAtomValue(bpsAtom);
  const group = useRef();
  useFrame(({ clock }) => {
    const coefficient = Math.pow(
      Math.cos(Math.PI * clock.elapsedTime * bps),
      power
    );
    group.current.scale.x = scale[0] + coefficient * offset[0];
    group.current.scale.y = scale[1] + coefficient * offset[1];
    group.current.scale.z = scale[2] + coefficient * offset[2];
  });
  return <group ref={group}>{children}</group>;
}
