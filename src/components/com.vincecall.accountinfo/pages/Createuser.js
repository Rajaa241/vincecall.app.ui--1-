import React, { useState } from 'react'
import { Box, Button, Card, CardHeader, Divider, Grid, MenuItem, Stack, TextField } from '@mui/material';
import { getTaskFields } from '../fields/GetFields';
import { EMAIL_FIELD_ID, FIRSTNAME_FIELD_ID, LASTNAME_FIELD_ID, NAME_FIELD_ID, PASSWORD_FIELD_ID, PHONE_FIELD_ID, ROLE_FIELD_ID } from '../constants/Constants';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
import { AUTH_USERNAME_FIELD_ID } from '../../com.vincecall.auth/constants/Constants';
import { useLocation } from 'react-router-dom';

const Createuser = () => {

    const [errors, setErrors] = useState({});
    const location = useLocation();
    const [formData, setFormData] = useState(location?.state?.formData || {});
    const fields = [
        AUTH_USERNAME_FIELD_ID,
        PASSWORD_FIELD_ID,
        FIRSTNAME_FIELD_ID,
        LASTNAME_FIELD_ID,
        PHONE_FIELD_ID,
    ];
    const formFields = getTaskFields(fields);


    const projects = ['Admin', 'User']
    const handleChange = (field_name, value) => {
        switch (field_name) {
            case AUTH_USERNAME_FIELD_ID: {
                // if (!isValidTitle(value)) {
                //   setErrors({
                //     [field_name]: { message: "Title should be at least 4 characters" },
                //   });
                // } else {
                //   setErrors((prevErrors) => {
                //     delete prevErrors[field_name];
                //     return { ...prevErrors };
                //   });
                setFormData({ ...formData, [field_name]: value });
                // }
                break;
            }
            case PASSWORD_FIELD_ID: {
                if (value === "Training") {
                    setErrors({ [field_name]: { message: "You are not assigned to any project yet" } })
                }
                setFormData({ ...formData, [field_name]: value });
                break;
            }
            case FIRSTNAME_FIELD_ID: {
                setFormData({ ...formData, [field_name]: value });
                break;
            }
            case LASTNAME_FIELD_ID: {
                setFormData({ ...formData, [field_name]: value });
                break;
            }
            case PHONE_FIELD_ID: {
                setFormData({ ...formData, [field_name]: value });
                break;
            }
            default: {
                console.error("Invalid field name: ", field_name);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(formData);
        axiosInstance.post("/subusers/create", formData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <Card sx={{ borderTop: 'inset', margin: '140px' }}>
            <CardHeader title="VinceCall - Manage Users (You Can Add 1 More Sub Accounts)" >
            </CardHeader>
            <Divider />
            <Box component={"form"} onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    sx={{ mt: 1 }}
                >
                    {formFields.map((field, key) => (
                        <Grid item xs={12} key={key} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField
                                {...field}
                                size='small'
                                key={key}
                                label={field.label}
                                placeholder={field.placeholder}
                                error={errors[field.name] ? true : false}
                                helperText={errors?.[field.name]?.message}
                                defaultValue={formData[field.name]}
                                onChange={(event) => handleChange(field.name, event.target.value)}
                            >
                                {/* {field.select && field.id === ROLE_FIELD_ID ? (
                                    projects.map((status, idx1) => (
                                        <MenuItem value={status} key={idx1}>
                                            {status}
                                        </MenuItem>
                                    ))
                                ) : (
                                    <React.Fragment />
                                )} */}
                            </TextField>
                        </Grid>
                    ))}
                    <Grid item xs={12} sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                        {
                            // !loading ?
                            <Stack direction='row' spacing={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                >
                                    {location?.state ? "Update User" : "Create User"}
                                </Button>

                            </Stack>
                            // :
                            // <CircularProgress />
                        }
                    </Grid>
                </Grid>
            </Box>
        </Card >
    )
}

export default Createuser