import { Billboard, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useViewer } from "../context/stores/useViewer";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export const Background = () => {
  const [meshes, setMeshes] = useState([]); // State to store the meshes (billboards)
  const sphereRef = useRef(); // Reference to the sphere mesh
  const [isDragging, setIsDragging] = useState(false); // State to track if the user is dragging
  const [startPos, setStartPos] = useState({ x: 0, y: 0 }); // State to store the start position of the mouse

  // Zustand store values
  const QUALITY = useViewer((state) => state.QUALITY);
  const COMMENT = useViewer((state) => state.COMMENT);
  const BLUR_SIZE = useViewer((state) => state.BLUR_SIZE);

  // Zustand store functions to set clear functions
  const setCLEAR_COMMENT = useViewer((state) => state.setCLEAR_COMMENT);
  const setCLEAR_BLUR = useViewer((state) => state.setCLEAR_BLUR);
  const setCLEAR_LAST_COMMENT = useViewer(
    (state) => state.setCLEAR_LAST_COMMENT
  );
  const setCLEAR_LAST_BLUR = useViewer((state) => state.setCLEAR_LAST_BLUR);

  // Use deferred value to load the texture in the background
  const deferred = useDeferredValue(`./textures/image_${QUALITY}.webp`);

  // Create a background texture using the deferred value
  const background = useTexture({
    map: deferred,
  });

  // Set color space and mapping for the background texture
  background.map.colorSpace = THREE.SRGBColorSpace;
  background.map.mapping = THREE.EquirectangularReflectionMapping;

  // Handle mouse down event
  const handleMouseDown = (event) => {
    setStartPos({ x: event.clientX, y: event.clientY });
    setIsDragging(false);
  };

  // Handle mouse move event
  const handleMouseMove = (event) => {
    const dx = event.clientX - startPos.x;
    const dy = event.clientY - startPos.y;
    if (Math.sqrt(dx * dx + dy * dy) > 5) {
      setIsDragging(true);
    }
  };

  // Handle mouse up event
  const handleMouseUp = (event) => {
    if (!isDragging) {
      const { point } = event;
      const closerPosition = point.clone().multiplyScalar(0.9); // Adjust the scalar value as needed
      const newMesh = {
        position: closerPosition,
        type: event.button === 0 ? "text" : "circle", // Determine the type of billboard
        text: COMMENT,
        blur_size: BLUR_SIZE,
      };
      setMeshes([...meshes, newMesh]);
    }
  };

  // Function to clear text billboards
  const clearTexts = () => {
    setMeshes(meshes.filter((mesh) => mesh.type !== "text"));
  };

  // Function to clear circle billboards
  const clearCircles = () => {
    setMeshes(meshes.filter((mesh) => mesh.type !== "circle"));
  };

  const clearLastText = () => {
    setMeshes((prevMeshes) => {
      const lastTextIndex = prevMeshes
        .map((mesh) => mesh.type)
        .lastIndexOf("text");
      if (lastTextIndex !== -1) {
        return prevMeshes.filter((_, index) => index !== lastTextIndex);
      }
      return prevMeshes;
    });
  };

  const clearLastCircle = () => {
    setMeshes((prevMeshes) => {
      const lastCircleIndex = prevMeshes
        .map((mesh) => mesh.type)
        .lastIndexOf("circle");
      if (lastCircleIndex !== -1) {
        return prevMeshes.filter((_, index) => index !== lastCircleIndex);
      }
      return prevMeshes;
    });
  };

  useEffect(() => {
    setCLEAR_COMMENT(() => clearTexts());
    setCLEAR_BLUR(() => clearCircles());
    setCLEAR_LAST_COMMENT(() => clearLastText());
    setCLEAR_LAST_BLUR(() => clearLastCircle());
  }, []);

  return (
    <>
      <mesh
        ref={sphereRef}
        onPointerDown={handleMouseDown}
        onPointerMove={handleMouseMove}
        onPointerUp={handleMouseUp}
        rotation-y={Math.PI / 2}
      >
        <sphereGeometry args={[20, 64, 32]} />
        <meshBasicMaterial map={background.map} side={THREE.BackSide} />
      </mesh>

      {meshes.map((mesh, index) =>
        mesh.type === "text" ? (
          <BillboardWithVisibility
            key={index}
            position={mesh.position}
            text={mesh.text}
          />
        ) : (
          <CircleBillboard
            key={index}
            position={mesh.position}
            blur_size={mesh.blur_size}
          />
        )
      )}
    </>
  );
};

// Component to render a text billboard with visibility control
const BillboardWithVisibility = ({ position, text }) => {
  const ref = useRef();
  const { camera } = useThree();
  const MIN_DISTANCE = 8;

  // Use frame hook to update visibility based on distance to camera
  useFrame(() => {
    if (ref.current) {
      const distance = camera.position.distanceTo(ref.current.position);
      ref.current.visible = distance >= MIN_DISTANCE;
    }
  });

  return (
    <Billboard ref={ref} position={position} scale={1} lockX lockY>
      <Text>
        <meshBasicMaterial color="white" toneMapped={false} depthTest={false} />
        {text}
      </Text>
    </Billboard>
  );
};

// Component to render a circle billboard with visibility control
const CircleBillboard = ({ position, blur_size }) => {
  const ref = useRef();
  const { camera } = useThree();
  const MIN_DISTANCE = 8;

  // Use frame hook to update visibility based on distance to camera
  useFrame(() => {
    if (ref.current) {
      const distance = camera.position.distanceTo(ref.current.position);
      ref.current.visible = distance >= MIN_DISTANCE;
    }
  });

  return (
    <Billboard ref={ref} position={position} scale={blur_size}>
      <mesh>
        <circleGeometry args={[0.5, 32]} />
        <meshPhysicalMaterial
          transmission={1}
          transparent
          roughness={0.5}
          depthTest={false}
        />
      </mesh>
    </Billboard>
  );
};
