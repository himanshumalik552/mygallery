import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import ProgressBar from "./ProgressBar";
import SnackBar from "./SnackBar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display:'flex',
    justifyContent:'center'
  },
  input: {
    display: "none",
  },
}));

export default function UploadButton() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const [severity, setSeverity] = useState("");
  const [alertText, setAlertText] = useState("");
  const classes = useStyles();
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setSeverity('success')
      setAlertText('Image upload successfully')
      setError(true);
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };
  return (
    <>
      <div className={classes.root}>
        <div>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<PhotoCamera />}
            >
              Upload
            </Button>
          </label>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
        </div>
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>

      <SnackBar
        open={error}
        setOpen={setError}
        severity={severity}
        alertText={alertText}
      />
    </>
  );
}
