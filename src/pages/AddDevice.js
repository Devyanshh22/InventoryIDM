import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AddDevice.css";

const AddDevice = () => {
  const navigate = useNavigate();

  const onCreateAddClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onCancelAddClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  return (
    <div className="add-device">
      <b className="add-device1">Add Device</b>
      <Button
        className="create-add"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 69, height: 36 }}
        onClick={onCreateAddClick}
      >
        Create
      </Button>
      <Button
        className="cancel-add"
        disableElevation={true}
        color="primary"
        variant="outlined"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 70, height: 36 }}
        onClick={onCancelAddClick}
      >
        Cancel
      </Button>
      <div className="device-info-add">
        <div className="device-name-add">
          <TextField
            className="device-add-name-text"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="date-of-purchase">Device name</b>
        </div>
        <div className="date-add">
          <TextField
            className="device-add-name-text"
            color="primary"
            variant="filled"
            type="date"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="date-of-purchase">Date Of Purchase</b>
        </div>
        <b className="device-information">Device information</b>
        <img
          className="device-info-add-logo-icon"
          alt=""
          src="/device-info-add-logo.svg"
        />
        <TextField
          className="note-add"
          color="primary"
          rows={4}
          label="Note"
          placeholder="Note"
          sx={{ width: 336 }}
          variant="outlined"
          defaultValue="Input text"
          multiline
        />
        <div className="brand-add">
          <b className="date-of-purchase">{`Brand `}</b>
          <TextField
            className="brand-add-text"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
        </div>
      </div>
      <div className="device-parameters-add">
        <div className="device-name-add">
          <TextField
            className="device-add-name-text"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="date-of-purchase">Warranty Period</b>
        </div>
        <b className="device-parameters">Device parameters</b>
        <img
          className="device-info-add-logo-icon"
          alt=""
          src="/privacy-add.svg"
        />
        <div className="condition">
          <TextField
            className="brand-add-text"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="date-of-purchase">Condition</b>
        </div>
      </div>
      <div className="acessories-add-device">
        <b className="acessories-included">Acessories Included</b>
        <img
          className="device-info-add-logo-icon"
          alt=""
          src="/laptop-add-device-page.svg"
        />
        <TextField
          className="note-add1"
          color="primary"
          label="Input text"
          sx={{ width: 335 }}
          variant="filled"
          multiline
        />
      </div>
    </div>
  );
};

export default AddDevice;
