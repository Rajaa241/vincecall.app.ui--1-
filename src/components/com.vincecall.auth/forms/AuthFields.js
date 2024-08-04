import { Email, Key, Output, Visibility, VisibilityOff } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton, InputAdornment } from "@mui/material";
import { AUTH_CONFRIM_PASSWORD_FIELD_ID, AUTH_FIRSTNAME_FIELD_ID, AUTH_GENDER_FIELD_ID, AUTH_LASTNAME_FIELD_ID, AUTH_MOBILE_FIELD_ID, AUTH_OTP_FIELD_ID, AUTH_PASSWORD_FIELD_ID, AUTH_ROLE_FIELD_ID, AUTH_USERNAME_FIELD_ID } from "../constants/Constants";
import { useState } from "react";


// const EndAdornment = () => {
//     return (<>
//         <InputAdornment position="end">
//             <IconButton
//                 onClick={() =>
//                     setShowConfirmPassword(!showConfirmPassword)
//                 }
//                 edge="end"
//             >
//                 {showConfirmPassword ? (
//                     <Visibility />
//                 ) : (
//                     <VisibilityOff />
//                 )}
//             </IconButton>
//         </InputAdornment>
//     </>)
// }

export const authFields = {

    [AUTH_USERNAME_FIELD_ID]: {
        id: AUTH_USERNAME_FIELD_ID,
        name: AUTH_USERNAME_FIELD_ID,
        type: "text",
        label: "Email",
        placeholder: "Enter your work email",
        variant: "outlined",
        autoFocus: true,
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Email fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_FIRSTNAME_FIELD_ID]: {
        id: AUTH_FIRSTNAME_FIELD_ID,
        name: AUTH_FIRSTNAME_FIELD_ID,
        type: "text",
        label: "FirstName",
        placeholder: "Enter Firstname",
        variant: "outlined",
        autoFocus: true,
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_LASTNAME_FIELD_ID]: {
        id: AUTH_LASTNAME_FIELD_ID,
        name: AUTH_LASTNAME_FIELD_ID,
        type: "text",
        label: "LastName",
        placeholder: "Enter Lastname",
        variant: "outlined",
        autoFocus: true,
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_GENDER_FIELD_ID]: {
        id: AUTH_GENDER_FIELD_ID,
        name: AUTH_GENDER_FIELD_ID,
        select: true,
        label: "Gender",
        placeholder: "select Gender",
        variant: "outlined",
        autoFocus: true,
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_ROLE_FIELD_ID]: {
        id: AUTH_ROLE_FIELD_ID,
        name: AUTH_ROLE_FIELD_ID,
        select: true,
        label: "Role",
        placeholder: "select Role",
        variant: "outlined",
        autoFocus: true,
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_MOBILE_FIELD_ID]: {
        id: AUTH_MOBILE_FIELD_ID,
        name: AUTH_MOBILE_FIELD_ID,
        type: "text",
        label: "Mobile",
        placeholder: "Mobile Number",
        variant: "outlined",
        autoFocus: true,
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_OTP_FIELD_ID]: {
        id: AUTH_OTP_FIELD_ID,
        name: AUTH_OTP_FIELD_ID,
        type: "text",
        label: 'OTP',
        placeholder: "Enter OTP here",
        variant: "outlined",
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Output fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_PASSWORD_FIELD_ID]: {
        id: AUTH_PASSWORD_FIELD_ID,
        name: AUTH_PASSWORD_FIELD_ID,
        type: "password",
        label: 'Password',
        placeholder: 'Enter Password',
        variant: "outlined",
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Key fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [AUTH_CONFRIM_PASSWORD_FIELD_ID]: {
        id: AUTH_CONFRIM_PASSWORD_FIELD_ID,
        name: AUTH_CONFRIM_PASSWORD_FIELD_ID,
        type: "password",
        label: 'Confirm Password',
        placeholder: "Confirm Password",
        variant: "outlined",
        required: true,
        inputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Key fontSize="small" />
                </InputAdornment>
            )
        }
    }
}    