import { useViewer } from "./useViewer";

export const UI = () => {
  const QUALITY = useViewer((state) => state.QUALITY);
  const setQUALITY = useViewer((state) => state.setQUALITY);

  return (
    <>
      <div className="HUD-container">
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
    </>
  );
};
