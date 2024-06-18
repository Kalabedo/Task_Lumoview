import Select from "@mui/material/Select";
import { useViewer } from "./stores/useViewer";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import ValidatedTextField from "./ValidatedTextField";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";

export const UI = () => {
  const QUALITY = useViewer((state) => state.QUALITY);
  const setQUALITY = useViewer((state) => state.setQUALITY);
  const LOCK = useViewer((state) => state.LOCK);
  const setLOCK = useViewer((state) => state.setLOCK);
  const COMMENT = useViewer((state) => state.COMMENT);
  const setCOMMENT = useViewer((state) => state.setCOMMENT);
  const BLUR_SIZE = useViewer((state) => state.BLUR_SIZE);
  const setBLUR_SIZE = useViewer((state) => state.setBLUR_SIZE);
  const CLEAR_COMMENT = useViewer((state) => state.CLEAR_COMMENT);
  const CLEAR_BLUR = useViewer((state) => state.CLEAR_BLUR);

  return (
    <>
      <div className="HUD-container">
        <div className="logo-container">
          <a href="https://www.lumoview.com/">
            <img
              src="./textures/logo.webp"
              alt="Logo"
            />
          </a>
        </div>
        <div className="button-container">
          <h4>Quality</h4>
          <FormControl fullWidth>
            <InputLabel>Quality</InputLabel>
            <Select
              id="Quality"
              name="Quality"
              value={QUALITY}
              label="Quality"
              onChange={(e) => {
                setQUALITY(e.target.value);
              }}
            >
              <MenuItem key={"low"} value={"low"}>
                Low
              </MenuItem>
              <MenuItem key={"medium"} value={"medium"}>
                Medium
              </MenuItem>
              <MenuItem key={"High"} value={"high"}>
                High
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="button-container">
          <h4>Controls</h4>
          <Button
            variant="contained"
            onClick={() => {
              if (LOCK) {
                setLOCK(false);
              } else {
                setLOCK(true);
              }
            }}
            startIcon={!LOCK ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon />}
          >
            {LOCK ? "Lock" : "Free"}
          </Button>
        </div>

        <div className="comment-container">
          <h4>Comment</h4>
          <TextField
            label="Enter your comment..."
            variant="outlined"
            value={COMMENT}
            onChange={(e) => setCOMMENT(e.target.value)}
            multiline
            rows={4}
          />
          <p>
            Enter your comment and <strong>Left-Click</strong> on the image to
            place it!
          </p>
          <Button
            variant="contained"
            startIcon={<ClearRoundedIcon />}
            onClick={() => CLEAR_COMMENT()}
          >
            Clear all comments
          </Button>
        </div>

        <div className="blur-container">
          <h4>Blur</h4>
          <ValidatedTextField
            label={"Blurradius"}
            defaultValue={BLUR_SIZE}
            min={0.1}
            max={10}
            step={0.1}
            setterValue={setBLUR_SIZE}
          />
          <p>
            Select your blur radius and hit <strong>Enter</strong>. To blur a
            specific area of the image <strong>Right-Click</strong> it!
          </p>
          <Button
            variant="contained"
            startIcon={<ClearRoundedIcon />}
            onClick={() => CLEAR_BLUR()}
          >
            Clear all blurs
          </Button>
        </div>
      </div>
    </>
  );
};
