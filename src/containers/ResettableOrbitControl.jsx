import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useKeydown } from "../hooks";

export function ResettableOrbitControl(props) {
  const { ref, ...rest } = props;
  const controlRef = useRef();
  useKeydown("r", () => {
    controlRef.current?.reset();
  });
  return <OrbitControls ref={controlRef} {...rest} />;
}
