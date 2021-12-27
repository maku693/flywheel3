import {
  Box,
  CameraShake,
  Cone,
  Environment,
  Octahedron,
  PerspectiveCamera,
  Sphere,
  Tetrahedron,
  TorusKnot,
} from "@react-three/drei";
import {
  Glitch,
  ChromaticAberration,
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { ResettableOrbitControl } from "./containers/ResettableOrbitControl";
import BeatScale from "./containers/BeatScale";
import BeatRotate from "./containers/BeatRotate";
import { useBeats } from "./hooks";
import Stars from "./models/Stars";
import MirrorBall from "./models/MirrorBall";
import Dragon from "./models/Dragon";
import Suzanne from "./models/Suzanne";
import Masawada from "./models/Masawada";
import Bunny from "./models/Bunny";

export default function Stage() {
  const beat = useBeats();
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      {true && (
        <CameraShake
          maxYaw={0.05}
          maxPitch={0.05}
          maxRoll={0.05}
          yawFrequency={0.2}
          pitchFrequency={0.2}
          rollFrequency={0.2}
          additive
        />
      )}
      <ResettableOrbitControl />
      <Environment preset="sunset" />
      <ambientLight />
      {[0, 1, 2, 3].includes(beat) && (
        <BeatRotate speed={[-0.05, -0.1, -0.15]}>
          <BeatScale offset={[0.1, 0.1, 0.1]} power={10}>
            <Box scale={1} position={[0, 5, 1]}>
              <meshStandardMaterial
                attach="material"
                color="cyan"
                roughness={0}
                metalness={1}
                flatShading
              />
            </Box>
            <Box scale={1} position={[0, -5, -1]}>
              <meshStandardMaterial
                attach="material"
                color="red"
                roughness={0}
                metalness={1}
                flatShading
              />
            </Box>
          </BeatScale>
        </BeatRotate>
      )}
      {[0, 1, 2, 3].includes(beat) && (
        <BeatRotate speed={[0.15, 0.05, 0.05]}>
          <BeatScale offset={[0.1, 0.1, 0.1]} power={10}>
            <Sphere scale={1} position={[5, 1, 0]}>
              <meshStandardMaterial
                attach="material"
                color="red"
                roughness={0}
                metalness={1}
                flatShading
              />
            </Sphere>
            <Sphere scale={1} position={[-5, -1, 0]}>
              <meshStandardMaterial
                attach="material"
                color="cyan"
                roughness={0}
                metalness={1}
                flatShading
              />
            </Sphere>
          </BeatScale>
        </BeatRotate>
      )}
      {true && (
        // <BeatRotate speed={[0.05, -0.05, 0.1]}>
        //   <BeatScale offset={[0.1, 0.1, 0.1]} power={10}>
        <group>
          {[0, 1, 2, 3].includes(beat) &&
            [...Array(10).keys()].map((i) => (
              <Octahedron key={i} scale={1.5} position={[i % 2, 0, 0]}>
                <meshStandardMaterial
                  attach="material"
                  color="greenyellow"
                  roughness={0}
                  metalness={1}
                  flatShading
                />
              </Octahedron>
            ))}
        </group>
        //   </BeatScale>
        // </BeatRotate>
      )}
      {true && (
        // <BeatRotate speed={[0.015, 0.015, 0.025]}>
        <Stars color="white" count={500} size={200} />
        // </BeatRotate>
      )}
      <EffectComposer>
        {false && (
          <Glitch
            delay={[1, 3]}
            duration={[0.6, 1.0]}
            strength={[0.1, 0.2]}
            mode={GlitchMode.CONSTAMT_MILD}
            ratio={0.5}
          />
        )}
        {false && <ChromaticAberration offset={[0.05, 0]} />}
        {true && <Bloom luminanceThreshold={0.75} />}
      </EffectComposer>
    </>
  );
}
