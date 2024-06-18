import { CameraControls } from "@react-three/drei";
import { useViewer } from "../context/stores/useViewer";

export const CustomCameraControls = () => {

  const LOCK = useViewer((state) => state.LOCK);

  return (
    <>
      <CameraControls
        makeDefault
        maxDistance={21}
        minDistance={0}
        polarRotateSpeed={-0.5}
        azimuthRotateSpeed={-0.5}
        enabled={!LOCK}
      />
    </>
  );
};
