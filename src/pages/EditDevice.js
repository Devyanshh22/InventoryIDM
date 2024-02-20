import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./EditDevice.css";

const EditDevice = () => {
  const navigate = useNavigate();

  const onSaveEditClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onCancelEditClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  return (
    <div className="edit-device">
      <b className="edit-device-information">Edit Device Information</b>
      <Button
        className="save-edit"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 57, height: 36 }}
        onClick={onSaveEditClick}
      >
        Save
      </Button>
      <Button
        className="cancel-edit"
        disableElevation={true}
        color="primary"
        variant="outlined"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 70, height: 36 }}
        onClick={onCancelEditClick}
      >
        Cancel
      </Button>
      <div className="device-information1">
        <div className="warranty">
          <TextField
            className="device-name-edit-text"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="device-name3">Device name</b>
        </div>
        <div className="date">
          <TextField
            className="device-name-edit-text"
            color="primary"
            variant="filled"
            type="date"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="device-name3">Date Of Purchase</b>
        </div>
        <b className="device-information2">Device information</b>
        <img
          className="deviceinfo-logo-icon"
          alt=""
          src="/device-info-add-logo.svg"
        />
        <div className="note">
          <b className="device-name3">Note</b>
          <TextField
            className="note-edit-text"
            color="primary"
            label="Input text"
            sx={{ width: 335 }}
            variant="filled"
            multiline
          />
        </div>
        <div className="brand1">
          <b className="device-name3">{`Brand `}</b>
          <TextField
            className="brand-textbox"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
        </div>
      </div>
      <div className="device-parameters1">
        <div className="warranty">
          <TextField
            className="device-name-edit-text"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="device-name3">Warranty Period</b>
        </div>
        <b className="device-parameters2">Device parameters</b>
        <img className="deviceinfo-logo-icon" alt="" src="/privacy-add.svg" />
        <div className="condition2">
          <TextField
            className="brand-textbox"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
          <b className="device-name3">Condition</b>
        </div>
        <div className="repair3">
          <b className="device-name3">Repair</b>
          <TextField
            className="brand-textbox"
            color="primary"
            variant="filled"
            sx={{ "& .MuiInputBase-root": { height: "35px" }, width: "335px" }}
          />
        </div>
      </div>
      <div className="acessories-box">
        <b className="acessories-included1">Acessories Included</b>
        <img
          className="deviceinfo-logo-icon"
          alt=""
          src="/laptop-add-device-page.svg"
        />
        <TextField
          className="accessories-text-input"
          color="primary"
          label="Add Acessories"
          sx={{ width: 335 }}
          variant="filled"
          multiline
        />
      </div>
    </div>
  );
};

export default EditDevice;
