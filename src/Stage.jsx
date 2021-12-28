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
          maxYaw={0.1}
          maxPitch={0.1}
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
        <BeatRotate speed={[0.2, -0.1, 0.1]}>
          <BeatScale offset={[0.1, 0.1, 0.1]} power={10}>
            <Box position={[0, 2, 1]}>
              <meshStandardMaterial
                attach="material"
                color="green"
                roughness={0}
                metalness={1}
                flatShading
              />
            </Box>
            <Sphere position={[0, -5, -1]}>
              <meshStandardMaterial
                attach="material"
                color="green"
                roughness={0}
                metalness={1}
                flatShading
              />
            </Sphere>
          </BeatScale>
        </BeatRotate>
      )}
      {true &&
        [0, 1, 2, 3].includes(beat) &&
        [...Array(10).keys()]
          .map((x, _, { length }) => x - length / 2 + 0.5)
          .map((i) => (
            <BeatRotate speed={[0.2, -0.01, 0.05]}>
              <BeatScale offset={[0.1, 0.1, 0.1]} power={10}>
                <group position={[(i % 2) * 3, (i % 5) * 4, (i % 3) * 4]}>
                  <Octahedron position={[5, 1, 0]}>
                    <meshStandardMaterial
                      attach="material"
                      color="red"
                      roughness={0}
                      metalness={1}
                      flatShading
                    />
                  </Octahedron>
                  <Octahedron position={[-5, -1, 0]}>
                    <meshStandardMaterial
                      attach="material"
                      color="cyan"
                      roughness={0}
                      metalness={1}
                      flatShading
                    />
                  </Octahedron>
                </group>
              </BeatScale>
            </BeatRotate>
          ))}
      {true && (
        <BeatRotate speed={[0.05, 0.1, -0.02]}>
          <BeatScale offset={[0.1, 0.1, 0.1]} power={100}>
            {[0, 1, 2, 3].includes(beat) &&
              [...Array(30).keys()]
                .map((x, _, { length }) => x - length / 2 + 0.5)
                .map((i) => (
                  <group
                    key={i}
                    position={[(i % 5) * 5, (i % 4) * 6, (i % 3) * 4]}
                  >
                    <BeatRotate speed={[0.05 * (i % 3), -0.02, 0.01]}>
                      <Masawada>
                        <meshStandardMaterial
                          attach="material"
                          color="greenyellow"
                          roughness={0}
                          metalness={1}
                          flatShading
                        />
                      </Masawada>
                    </BeatRotate>
                  </group>
                ))}
          </BeatScale>
        </BeatRotate>
      )}
      {false && (
        <BeatRotate speed={[0.01, 0.005, 0]}>
          <Stars color="white" count={500} size={200} />
        </BeatRotate>
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
        {false && <ChromaticAberration offset={[0.02, 0]} />}
        {false && <Bloom luminanceThreshold={0.5} />}
      </EffectComposer>
    </>
  );
}
