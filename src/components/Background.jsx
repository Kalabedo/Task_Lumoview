// Import necessary dependencies
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useViewer } from "../context/stores/useViewer";
import { useDeferredValue, useEffect, useRef } from "react";

// Define the Background component
export const Background = () => {
  // Get the QUALITY value from the useViewer context
  const QUALITY = useViewer((state) => state.QUALITY);

  // Use deferred value to load the texture in the background
  const deferred = useDeferredValue(`./textures/image_${QUALITY}.webp`);

  // Create a background texture using the deferred value
  const background = useTexture({
    map: deferred,
  });

  // Set color space and mapping for the background texture
  background.map.colorSpace = THREE.SRGBColorSpace;
  background.map.mapping = THREE.EquirectangularReflectionMapping;

  // Return a mesh with sphere geometry and a basic material with the background texture
  return (
    <mesh rotation-y={Math.PI / 2}>
      <sphereGeometry args={[20, 64, 32]} />
      <meshBasicMaterial map={background.map} side={THREE.BackSide} />
    </mesh>
  );
};
