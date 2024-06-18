import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import { UI } from "./context/UI";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./context/MuiTheme";

function App() {
  return (
    <>
      <div className="container">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Experience />
          </Canvas>
        </div>
        <div className="controls-container">
          <ThemeProvider theme={MuiTheme}>
            <UI />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

export default App;
