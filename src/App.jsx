import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import GorgeousMarquee from "./components/GorgeousMarquee";
import { useTapTempoBPM } from "./hooks";
import Stage from "./Stage";
import Rhombus from "./components/Rhombus";

function App() {
  useTapTempoBPM();
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>{true && <Stage />}</Suspense>
      </Canvas>
      {true && <Rhombus />}
      {true && <GorgeousMarquee>こんにちは</GorgeousMarquee>}
    </div>
  );
}

export default App;
