import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./AdminChangePassword.css";

const AdminChangePassword = () => {
  const navigate = useNavigate();

  const onConfirmChangePassClick = useCallback(() => {
    navigate("/admin-user-page");
  }, [navigate]);

  return (
    <div className="admin-change-password">
      <div className="change-pass-box">
        <Button
          className="confirm-change-pass"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 496, height: 52 }}
          onClick={onConfirmChangePassClick}
        >
          Confirm
        </Button>
        <div className="please-set-your">Please set your new password.</div>
        <b className="change-password1">Change password</b>
        <img className="password-1-icon" alt="" src="/password-1.svg" />
        <TextField
          className="current-pass"
          color="primary"
          label="Current Password"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "83px" }, width: "516px" }}
        />
        <TextField
          className="new-pas"
          color="primary"
          label="New Password"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "83px" }, width: "516px" }}
        />
      </div>
    </div>
  );
};

export default AdminChangePassword;
