import { useFrame } from "@react-three/fiber";
import { useAtomValue } from "jotai/utils";
import { useRef } from "react";
import { bpsAtom } from "../atoms";

export default function BeatRotate({
  offset = [0, 0, 0],
  speed = [1, 1, 1],
  children,
}) {
  const bps = useAtomValue(bpsAtom);
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.rotation.x =
      Math.PI * 2 * (offset[0] + clock.elapsedTime * bps) * speed[0];
    group.current.rotation.y =
      Math.PI * 2 * (offset[1] + clock.elapsedTime * bps) * speed[1];
    group.current.rotation.z =
      Math.PI * 2 * (offset[2] + clock.elapsedTime * bps) * speed[2];
  });
  return <group ref={group}>{children}</group>;
}
