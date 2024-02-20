import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onConfirmClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="reset-password">
      <div className="reset-pass-big-box">
        <Button
          className="confirm"
          disableElevation={true}
          color="primary"
          variant="contained"
          href="/login-page"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 520, height: 52 }}
          onClick={onConfirmClick}
        >{`Confirm      `}</Button>
        <TextField
          className="employeeid-reset"
          color="primary"
          label="Employee Id"
          size="medium"
          variant="outlined"
          sx={{ "& .MuiInputBase-root": { height: "81px" }, width: "520px" }}
        />
        <div className="please-set-your1">Please set your new password.</div>
        <b className="reset-password1">Reset password</b>
        <img className="reset-box-pic" alt="" src="/reset-box-pic@2x.png" />
        <TextField
          className="new-password"
          color="primary"
          label="New Password"
          size="medium"
          variant="outlined"
          type="password"
          sx={{ "& .MuiInputBase-root": { height: "83px" }, width: "516px" }}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
