import { Description, Event, HourglassTopSharp, Note, PriorityHigh } from "@mui/icons-material";
import CategoryIcon from '@mui/icons-material/Category';
import { InputAdornment } from "@mui/material";
import { ADDRESSPROOF_FIELD_ID, ADDRESS_FIELD_ID, CEO_FIELD_ID, CITY_FIELD_ID, COMPANY_FIELD_ID, COUNTRY_FIELD_ID, DRIVERLISENCE_FIELD_ID, EMAIL_FIELD_ID, FEDERAL_FIELD_ID, NAME_FIELD_ID, PASSWORD_FIELD_ID, PHONE_FIELD_ID, ROLE_FIELD_ID, STATE_FIELD_ID, USERNAME_FIELD_ID, ZIP_FIELD_ID } from "../constants/Constants";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';
import PinDropIcon from '@mui/icons-material/PinDrop';

export const taskFields = {
    [EMAIL_FIELD_ID]: {
        id: EMAIL_FIELD_ID,
        name: EMAIL_FIELD_ID,
        type: "text",
        label: "Email",
        placeholder: "Enter Email",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <EmailIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [COMPANY_FIELD_ID]: {
        id: COMPANY_FIELD_ID,
        name: COMPANY_FIELD_ID,
        type: "text",
        label: "Company",
        placeholder: "Enter Company",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [CEO_FIELD_ID]: {
        id: CEO_FIELD_ID,
        name: CEO_FIELD_ID,
        type: "text",
        label: "Ceo name",
        placeholder: "Enter Ceo name",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [DRIVERLISENCE_FIELD_ID]: {
        id: DRIVERLISENCE_FIELD_ID,
        name: DRIVERLISENCE_FIELD_ID,
        type: "file",
        label: "Driving Lisence",
        placeholder: "Enter Company",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [ADDRESSPROOF_FIELD_ID]: {
        id: ADDRESSPROOF_FIELD_ID,
        name: ADDRESSPROOF_FIELD_ID,
        type: "file",
        label: "Address Proof",
        placeholder: "Enter Company",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <HomeIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [FEDERAL_FIELD_ID]: {
        id: FEDERAL_FIELD_ID,
        name: FEDERAL_FIELD_ID,
        type: "text",
        label: "Federal ID",
        placeholder: "Enter Federal ID",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [COMPANY_FIELD_ID]: {
        id: COMPANY_FIELD_ID,
        name: COMPANY_FIELD_ID,
        type: "text",
        label: "Company",
        placeholder: "Enter Company",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [COMPANY_FIELD_ID]: {
        id: COMPANY_FIELD_ID,
        name: COMPANY_FIELD_ID,
        type: "text",
        label: "Company",
        placeholder: "Enter Company",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [USERNAME_FIELD_ID]: {
        id: USERNAME_FIELD_ID,
        name: USERNAME_FIELD_ID,
        type: "text",
        label: "username",
        placeholder: "Enter username",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <EmailIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [ADDRESS_FIELD_ID]: {
        id: ADDRESS_FIELD_ID,
        name: ADDRESS_FIELD_ID,
        type: "text",
        label: "Address",
        multiline: true,
        rows: 4,
        placeholder: "Enter Address",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        // InputProps:
        // {
        //     startAdornment: (
        //         <InputAdornment position="start">
        //             <HomeIcon fontSize="small" />
        //         </InputAdornment>
        //     )
        // }
    },
    [CITY_FIELD_ID]: {
        id: CITY_FIELD_ID,
        name: CITY_FIELD_ID,
        type: "text",
        label: "city",
        placeholder: "Enter City name",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <FlagIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [ZIP_FIELD_ID]: {
        id: ZIP_FIELD_ID,
        name: ZIP_FIELD_ID,
        type: "text",
        label: "pincode",
        placeholder: "Enter pincode",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PinDropIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [PASSWORD_FIELD_ID]: {
        id: PASSWORD_FIELD_ID,
        name: PASSWORD_FIELD_ID,
        type: "password",
        label: "Password",
        placeholder: "Enter Password",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <KeyIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [NAME_FIELD_ID]: {
        id: NAME_FIELD_ID,
        name: NAME_FIELD_ID,
        type: "text",
        label: "Name",
        placeholder: "Enter Name",
        variant: "outlined",
        autoFocus: true,
        required: true,

        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [PHONE_FIELD_ID]: {
        id: PHONE_FIELD_ID,
        name: PHONE_FIELD_ID,
        type: "text",
        label: "Phone Number",
        placeholder: "Enter Phone",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PhoneIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [ROLE_FIELD_ID]: {
        id: ROLE_FIELD_ID,
        name: ROLE_FIELD_ID,
        select: true,
        label: "Select Roles",
        placeholder: "Select Roles",
        variant: "outlined",
        autoFocus: true,
        required: true,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [COUNTRY_FIELD_ID]: {
        id: COUNTRY_FIELD_ID,
        name: COUNTRY_FIELD_ID,
        select: true,
        label: "Select Country",
        placeholder: "Select Country",
        variant: "outlined",
        autoFocus: true,
        required: true,
        width: 250,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <PublicIcon fontSize="small" />
                </InputAdornment>
            )
        }
    },
    [STATE_FIELD_ID]: {
        id: STATE_FIELD_ID,
        name: STATE_FIELD_ID,
        select: true,
        label: "Select State",
        placeholder: "Select State",
        variant: "outlined",
        autoFocus: true,
        required: true,
        width: 250,
        InputLabelProps: { shrink: true },
        InputProps:
        {
            startAdornment: (
                <InputAdornment position="start">
                    <Note fontSize="small" />
                </InputAdornment>
            )
        }
    },




}