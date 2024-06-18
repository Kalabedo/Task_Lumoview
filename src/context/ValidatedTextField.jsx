import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ErrorIcon from "@mui/icons-material/Error";

const ValidatedTextField = ({
  label,
  defaultValue,
  changeValue,
  min,
  max,
  step,
  setterValue,
}) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  return (
    <TextField
      fullWidth
      type="number"
      label={label}
      defaultValue={value}
      InputProps={{ inputProps: {min: min, max: max, step: step }}}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();

          const value = parseFloat(e.target.value);

          if (!isNaN(value)) {
            // Check for valid Nummer
            const clampedValue = Math.min(Math.max(value, min), max); //Range Request
            setterValue(clampedValue);
            setIsValid(max >= value && value >= min);
          }
        }
      }}
      helperText={
        !isValid && (
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <ErrorIcon sx={{ width: 20, paddingRight: 1 }} /> The value has to be between {min} and {max}.
          </span>
        )
      }
      error={!isValid}
    />
  );
};

export default ValidatedTextField;
