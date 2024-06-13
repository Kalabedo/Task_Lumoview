import { CameraControls } from "@react-three/drei";

export const CustomCameraControls = () => {
  return (
    <>
      <CameraControls
        makeDefault
        maxDistance={21}
        minDistance={0.01}
        polarRotateSpeed={-0.5}
        azimuthRotateSpeed={-0.5}
      />
    </>
  );
};
