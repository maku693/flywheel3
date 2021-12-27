import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Logo2D from "./components/Logo2D";
import GorgeousMarquee from "./components/GorgeousMarquee";
import { useTapTempoBPM } from "./hooks";
import Stage from "./Stage";

function App() {
  useTapTempoBPM();
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Stage />
        </Suspense>
      </Canvas>
      {false && <Logo2D />}
      {true && <GorgeousMarquee>こんにちは</GorgeousMarquee>}
    </div>
  );
}

export default App;
