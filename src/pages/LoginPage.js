import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onClickHereClick = useCallback(() => {
    navigate("/reset-password");
  }, [navigate]);

  return (
    <div className="login-page">
      <img className="image-icon" alt="" src="/image@2x.png" />
      <div className="login-box-full">
        <Button
          className="login-button"
          disableElevation={true}
          color="success"
          variant="contained"
          href="/home-page"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 196, height: 44 }}
          onClick={onLoginButtonClick}
        >
          Log In
        </Button>
        <div className="text-input-boxes">
          <b className="login">Login</b>
          <TextField
            className="pass-area"
            color="primary"
            variant="standard"
            sx={{ "& .MuiInputBase-root": { height: "48px" }, width: "270px" }}
          />
          <TextField
            className="emp-area"
            color="primary"
            variant="standard"
            sx={{ "& .MuiInputBase-root": { height: "48px" }, width: "270px" }}
          />
          <b className="employee-id1">Employee ID :</b>
          <b className="password">Password :</b>
        </div>
        <div className="forgot-your-password">Forgot your password?</div>
        <Link
          className="click-here"
          to="/reset-password"
          onClick={onClickHereClick}
        >
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
