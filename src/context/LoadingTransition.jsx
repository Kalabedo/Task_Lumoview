import { Html } from "@react-three/drei";
import { useMemo } from "react";

export const LoadingTransition = () => {
  const image = useMemo(() => "./textures/logo.webp");

  return (
    <Html fullscreen>
      <div className="loadingOverlay">
        <img src={image} alt="Loading..." className="loadingLogo" />
      </div>
    </Html>
  );
};
