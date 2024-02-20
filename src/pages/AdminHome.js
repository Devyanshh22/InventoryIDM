import { useState, useCallback } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import Upload from "../components/Upload";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminHome.css";

const AdminHome = () => {
  const [dropdownButton3AnchorEl, setDropdownButton3AnchorEl] = useState(null);
  const [isUpload1Open, setUpload1Open] = useState(false);
  const navigate = useNavigate();
  const dropdownButton3Open = Boolean(dropdownButton3AnchorEl);
  const handleDropdownButton3Click = (event) => {
    setDropdownButton3AnchorEl(event.currentTarget);
  };
  const handleDropdownButton3Close = () => {
    setDropdownButton3AnchorEl(null);
  };

  const onFrameContainer1Click = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/admin-user-page");
  }, [navigate]);

  const onButton1ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewHomeContainerClick = useCallback(() => {
    navigate("/admin-device-page");
  }, [navigate]);

  const onAddDeviceHomeClick = useCallback(() => {
    navigate("/add-device");
  }, [navigate]);

  const onDownloadClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openUpload1 = useCallback(() => {
    setUpload1Open(true);
  }, []);

  const closeUpload1 = useCallback(() => {
    setUpload1Open(false);
  }, []);

  return (
    <>
      <div className="admin-home">
        <div className="home-header">
          <div className="header-menu-1">
            <div className="frame">
              <div className="rectangle" />
              <b className="home">Home</b>
            </div>
            <div className="frame1" onClick={onFrameContainer1Click}>
              <div className="devices">Devices</div>
            </div>
            <div className="frame2" onClick={onFrameContainer2Click}>
              <div className="users">Users</div>
            </div>
          </div>
          <div className="button-1" onClick={onButton1ContainerClick}>
            <div className="logout">Logout</div>
          </div>
        </div>
        <div className="device-requests">
          <img className="alarm-1-icon" alt="" src="/alarm-1.svg" />
          <div className="div">{`                `}</div>
          <div className="view-home" onClick={onViewHomeContainerClick}>
            <div className="view">View</div>
          </div>
          <img className="e-remove-1" alt="" src="/e-remove-1.svg" />
          <div className="device-requests1">Device Requests</div>
        </div>
        <b className="admin">Admin</b>
        <div className="devices-home">
          <b className="devices1">{`Devices `}</b>
          <div className="laptop">
            <div className="stock-4">15 Stock • 4 Assigned</div>
            <b className="laptops">Laptops</b>
            <img className="lapicon" alt="" src="/lapicon.svg" />
          </div>
          <div className="mouse">
            <img className="mouse-icon" alt="" src="/mouse-icon.svg" />
            <b className="mouse1">Mouse</b>
            <div className="stock-41">1 Stock • 4 Assigned</div>
          </div>
          <div className="keyboards">
            <img className="mouse-icon" alt="" src="/keyicon.svg" />
            <b className="keyboards1">Keyboards</b>
            <div className="stock">1 Stock • 4 Assigned</div>
          </div>
          <div className="headphones">
            <img className="mouse-icon" alt="" src="/headicon.svg" />
            <b className="headphones1">Headphones</b>
            <div className="stock-42">1 Stock • 4 Assigned</div>
          </div>
          <div className="more-devices">
            <img className="mouse-icon" alt="" src="/gear.svg" />
            <div className="dropdown-button-3">
              <Button
                sx={{ width: 193 }}
                id="button-More Devices"
                aria-controls="menu-More Devices"
                aria-haspopup="true"
                aria-expanded={dropdownButton3Open ? "true" : undefined}
                onClick={handleDropdownButton3Click}
                color="primary"
              >
                More Devices
              </Button>
              <Menu
                anchorEl={dropdownButton3AnchorEl}
                open={dropdownButton3Open}
                onClose={handleDropdownButton3Close}
              >
                <MenuItem onClick={handleDropdownButton3Close}>
                  Monitor
                </MenuItem>
                <MenuItem onClick={handleDropdownButton3Close}>
                  Charger
                </MenuItem>
                <MenuItem onClick={handleDropdownButton3Close}>
                  +New Category
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className="add-device-home" onClick={onAddDeviceHomeClick}>
          <div className="add-devices">+ Add Devices</div>
        </div>
        <b className="device-logs">{`Device Logs `}</b>
        <div className="device-log-table">
          <div className="row">
            <div className="frame3" />
            <div className="frame4" />
            <div className="frame5" />
            <div className="frame6" />
            <div className="frame7" />
            <div className="frame8" />
          </div>
          <div className="row1">
            <div className="frame3" />
            <div className="frame4" />
            <div className="frame5" />
            <div className="frame6" />
            <div className="frame7" />
            <div className="frame8" />
          </div>
          <div className="row2">
            <div className="frame3" />
            <div className="frame4" />
            <div className="frame5" />
            <div className="frame6" />
            <div className="frame7" />
            <div className="frame8" />
          </div>
          <div className="home-table-header">
            <div className="repair-home">
              <div className="repair">Repair</div>
            </div>
            <div className="emp-i-dhome">
              <div className="employee-id">Employee ID</div>
            </div>
            <div className="return-home-table">
              <div className="return-date">Return Date</div>
            </div>
            <div className="collect-home-table">
              <div className="collected-by">Collected By</div>
            </div>
            <div className="device-id-home">
              <div className="device-id">Device ID</div>
            </div>
            <div className="assign-date">
              <div className="return-date">Assign Date</div>
            </div>
          </div>
        </div>
        <Button
          className="download"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 100, height: 40 }}
          onClick={onDownloadClick}
        >
          Download
        </Button>
        <Button
          className="upload"
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

export default AdminHome;
