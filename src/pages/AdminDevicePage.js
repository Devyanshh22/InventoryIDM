import { useState, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Upload from "../components/Upload";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminDevicePage.css";

const AdminDevicePage = () => {
  const [isUpload1Open, setUpload1Open] = useState(false);
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/admin-user-page");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDownloadClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAddDeviceButtonClick = useCallback(() => {
    navigate("/add-device");
  }, [navigate]);

  const onEditDeviceButtonClick = useCallback(() => {
    navigate("/edit-device");
  }, [navigate]);

  const openUpload1 = useCallback(() => {
    setUpload1Open(true);
  }, []);

  const closeUpload1 = useCallback(() => {
    setUpload1Open(false);
  }, []);

  return (
    <>
      <div className="admin-device-page">
        <div className="device-header">
          <div className="header-menu-11">
            <div className="frame21" onClick={onFrameContainerClick}>
              <div className="users1">Users</div>
            </div>
            <div className="frame22" onClick={onFrameContainer1Click}>
              <div className="home1">Home</div>
            </div>
            <div className="frame23">
              <div className="rectangle1" />
              <b className="devices2">Devices</b>
            </div>
          </div>
          <Button
            className="button-11"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 70, height: 36 }}
            onClick={onButton1Click}
          >
            Logout
          </Button>
        </div>
        <Button
          className="download1"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 100, height: 40 }}
          onClick={onDownloadClick}
        >
          Download
        </Button>
        <b className="devices3">Devices</b>
        <Button
          className="add-device-button"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 127, height: 40 }}
          onClick={onAddDeviceButtonClick}
        >
          Add Device
        </Button>
        <Button
          className="edit-device-button"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 127, height: 40 }}
          onClick={onEditDeviceButtonClick}
        >
          Edit Device
        </Button>
        <TextField
          className="admin-search-bar"
          color="primary"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "37px" }, width: "547px" }}
        />
        <div className="device-table">
          <div className="row3">
            <div className="frame24" />
            <div className="frame25" />
            <div className="frame26" />
            <div className="frame27" />
            <div className="frame28" />
            <div className="frame29" />
            <div className="frame30" />
            <div className="frame31" />
            <div className="frame32" />
          </div>
          <div className="row4">
            <div className="frame27" />
            <div className="frame28" />
            <div className="frame31" />
            <div className="frame30" />
            <div className="frame24" />
            <div className="frame32" />
            <div className="frame26" />
            <div className="frame25" />
            <div className="frame29" />
          </div>
          <div className="row5">
            <div className="frame28" />
            <div className="frame27" />
            <div className="frame25" />
            <div className="frame29" />
            <div className="frame24" />
            <div className="frame31" />
            <div className="frame26" />
            <div className="frame30" />
            <div className="frame32" />
          </div>
          <div className="row6">
            <div className="frame32" />
            <div className="frame25" />
            <div className="frame28" />
            <div className="frame27" />
            <div className="frame31" />
            <div className="frame30" />
            <div className="frame26" />
            <div className="frame24" />
            <div className="frame29" />
          </div>
          <div className="row7">
            <div className="frame27" />
            <div className="frame29" />
            <div className="frame26" />
            <div className="frame31" />
            <div className="frame30" />
            <div className="frame28" />
            <div className="frame24" />
            <div className="frame25" />
            <div className="frame32" />
          </div>
          <div className="row8">
            <div className="frame29" />
            <div className="frame27" />
            <div className="frame28" />
            <div className="frame32" />
            <div className="frame26" />
            <div className="frame25" />
            <div className="frame31" />
            <div className="frame30" />
            <div className="frame24" />
          </div>
          <div className="row9">
            <div className="frame24" />
            <div className="frame27" />
            <div className="frame32" />
            <div className="frame26" />
            <div className="frame31" />
            <div className="frame28" />
            <div className="frame29" />
            <div className="frame30" />
            <div className="frame25" />
          </div>
          <div className="row10">
            <div className="frame28" />
            <div className="frame31" />
            <div className="frame27" />
            <div className="frame26" />
            <div className="frame24" />
            <div className="frame25" />
            <div className="frame29" />
            <div className="frame32" />
            <div className="frame30" />
          </div>
          <div className="device-table-header">
            <div className="purchase-date">
              <div className="purchase-date1">Purchase date</div>
            </div>
            <div className="repair1">
              <div className="repair2">Repair</div>
            </div>
            <div className="device-id1">
              <div className="assigned-to">Device ID</div>
            </div>
            <button className="serial-no-device">
              <div className="serial">Serial</div>
            </button>
            <div className="retire-date">
              <div className="retire-date1">Retire date</div>
            </div>
            <div className="assigned-to-user">
              <div className="assigned-to">Assigned To</div>
            </div>
            <div className="device-name-table-editor">
              <div className="assigned-to">Device name</div>
            </div>
            <div className="rapair">
              <div className="assigned-to">Status</div>
            </div>
            <div className="type">
              <div className="assigned-to">Type</div>
            </div>
          </div>
        </div>
        <Button
          className="upload1"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 100, height: 40 }}
          onClick={openUpload1}
        >
          Upload
        </Button>
      </div>
      {isUpload1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpload1}
        >
          <Upload onClose={closeUpload1} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminDevicePage;
