import { useViewer } from "./stores/useViewer";

export const UI = () => {
  const QUALITY = useViewer((state) => state.QUALITY);
  const setQUALITY = useViewer((state) => state.setQUALITY);
  const LOCK = useViewer((state) => state.LOCK);
  const setLOCK = useViewer((state) => state.setLOCK);

  return (
    <>
      <div className="HUD-container">
        <div className="controls-container">
          <h4>Controls</h4>
          <button
            onClick={() => {
              if (LOCK) {
                setLOCK(false);
              } else {
                setLOCK(true);
              }
            }}
          >
            {LOCK ? "Lock" : "Free"}
          </button>
        </div>
        <div className="button-container">
          <h4>Quality</h4>
          <button
            onClick={() => {
              setQUALITY("low");
            }}
          >
            Low
          </button>
          <button
            onClick={() => {
              setQUALITY("medium");
            }}
          >
            Medium
          </button>
          <button
            onClick={() => {
              setQUALITY("high");
            }}
          >
            High
          </button>
        </div>
      </div>
    </>
  );
};
