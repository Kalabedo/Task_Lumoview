import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { UI } from "./context/stores/UI";
import { Suspense } from "react";
import { LoadingTransition } from "./context/LoadingTransition";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Experience />
      </Canvas>
      <UI />
    </>
  );
}

export default App;
