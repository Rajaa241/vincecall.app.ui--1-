import { DisabledByDefault, Refresh, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../../com.vincecall.common/validation/Validation";
import { doLogin } from "../actions/Action";
import AuthLogoContainer from "../common/LogoContainer";
import backgroundimage from '../../../assets/background.jpg'
import LockIcon from "@mui/icons-material/Lock";
import {
  AUTH_CAPTCHA_CHARACTERS,
  AUTH_PASSWORD_FIELD_ID,
  AUTH_USERNAME_FIELD_ID,
} from "../constants/Constants";
import { getFormFields } from "../forms/getAuthFields";
// import ResetPassword from "./ResetPassword";
// import Signup from "./Signup";

export default function Signin(props) {
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerType, setDrawerType] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());

  const fields = [AUTH_USERNAME_FIELD_ID, AUTH_PASSWORD_FIELD_ID];
  const formFields = getFormFields(fields);

  function generateCaptcha() {
    const characters = AUTH_CAPTCHA_CHARACTERS;
    const length = 6;
    let captcha = "";
    for (let i = 0; i < length; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return captcha;
  }

  const handleOnChange = (event, field_name) => {
    const value = event.target.value;
    switch (field_name) {
      case AUTH_USERNAME_FIELD_ID: {
        if (!isValidEmail(value)) {
          setErrors({ [field_name]: { message: "Invalid Email" } });
        } else {
          setErrors(delete [field_name]);
        }
        break;
      }
      case AUTH_PASSWORD_FIELD_ID: {
        break;
      }
      default: {
        throw new Error("Invalid field name " + field_name);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (captchaInput !== captcha) {
      setSnackbarOpen(!snackbarOpen);
      setErrorMessage("Invalid captcha.");
      return;
    }
    if (Object.keys(errors).length === 0 && captchaInput === captcha) {
      const formData = new FormData(event.currentTarget);
      doLogin(formData, handleSuccess, handleFailure, handleLoading);
    }
  };

  const handleSuccess = () => {
    navigate("/dashboard");
  };

  const handleFailure = (error) => {
    setSnackbarOpen(!snackbarOpen);
    if (typeof error === "object") {
      setErrorMessage("Invalid username or password.");
      return;
    }
    setErrorMessage(error);
  };

  const handleLoading = (state) => {
    setLoading(state);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <Box sx={{
      backgroundImage: `url(${backgroundimage})`, // Set the background image
      backgroundSize: 'cover', // Adjust the background size as needed
      backgroundPosition: 'center', // Adjust the background position as needed
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Container
        style={styles.emportal_login_container}
        component={"main"}
        maxWidth="xs"
      >
        <Card style={styles.emportal_login_card} >
          <CardContent>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <AuthLogoContainer title="Login" />
                {formFields.map((field, key) => {
                  return (
                    <Grid item key={key} xs={12}>
                      <TextField
                        key={key}
                        size="small"
                        type={field.id === AUTH_PASSWORD_FIELD_ID ?
                          showConfirmPassword ? "text" : "password"
                          :
                          field.type}
                        id={field.id}
                        fullWidth
                        disabled={loading}
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder}
                        variant={field.variant}
                        autoFocus={field.autoFocus}
                        InputLabelProps={{ shrink: true }}
                        InputProps={field.id === AUTH_PASSWORD_FIELD_ID ?
                          {
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockIcon fontSize="small" />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                  }
                                  edge="end"
                                >
                                  {showConfirmPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }
                          : field.inputProps}
                        required={field.required}
                        onChange={(event) => handleOnChange(event, field.name)}
                        error={errors[field.name] ? true : false}
                        helperText={errors?.[field.name]?.message}
                      />
                    </Grid>
                  );
                })}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Captcha"
                    size="small"
                    value={captchaInput}
                    placeholder="Enter Captcha"
                    error={captchaInput && captchaInput !== captcha}
                    onChange={(event) => setCaptchaInput(event.target.value)}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      endAdornment: (
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                              src={`https://dummyimage.com/120x40/ffffff/029a9c&text=${captcha}`}
                              alt="CAPTCHA"
                            />
                            <Refresh
                              onClick={handleRefreshCaptcha}
                              fontSize="10"
                              sx={{ cursor: "pointer" }}
                            />
                          </Box>
                        </>
                      ),
                    }}
                  />
                </Grid>

                <Drawer
                  anchor="right"
                  open={drawerOpen}
                >
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      fontSize: "large",
                    }}
                    onClick={handleClose}
                  >
                    <DisabledByDefault />
                  </IconButton>
                  <Box sx={{ width: "auto" }}>
                    {drawerType === "forgot" ? (
                      <></>
                      // <ResetPassword onClose={handleClose} />
                    ) : (
                      // <Signup onClose={handleClose} />
                      <></>
                    )}
                  </Box>
                </Drawer>
                <Grid item xs={12} sx={{ textAlign: "end" }}>
                  {/* <React.Fragment>
                  <Link
                    onClick={() => {
                      setDrawerType("forgot");
                      setDrawerOpen(true);
                    }}
                    style={styles.emportal_login_link_styles}
                    hidden={loading}
                  >
                    {"Forgot Password"}
                  </Link>
                </React.Fragment> */}
                </Grid>
                <Grid item xs>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      // disabled={Object.keys(errors).length !== 0 || captchaInput !== captcha}
                      fullWidth
                    >
                      {"Login"}
                    </Button>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <React.Fragment>
                    <Link
                      onClick={() => {
                        setDrawerType("forgot");
                        setDrawerOpen(true);
                      }}
                      style={styles.emportal_login_link_styles}
                      hidden={loading}
                    >
                      {"Forgot Password?"}
                    </Link>
                  </React.Fragment>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(!snackbarOpen)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={3000}
        >
          <Alert severity="warning">{errorMessage}</Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

const styles = {
  emportal_login_link_styles: {
    color: "#2381D9",
    fontWeight: 400,
    fontSize: "0.875rem",
    backgroundImage: backgroundimage
  },
  emportal_login_container: {
    marginTop: "2rem",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",

  },
  emportal_login_card: {
    borderRadius: "0.85rem",
  },
  refreshButton: {
    marginLeft: "5px",
  },
};




