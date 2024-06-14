import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { LoadingTransition } from "./context/LoadingTransition";
import { UI } from "./context/UI";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Experience />
      </Canvas>
      <UI />
    </>
  );
}

export default App;
