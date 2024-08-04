import React, { useEffect, useState } from 'react'
import { SERVICE_FIELD_ID, SERVICE_RATE_FIELD_ID, SERVICE_STATUS_FIELD_ID, USER_EMAIL_FIELD_ID, USER_GQLURI_FIELD_ID, USER_PASSWORD_FIELD_ID, USER_REGISTRATION_FIELD_ID } from '../constants/constants';
import { getUserFields } from '../fields/GetFields';
import { Alert, Box, Button, Card, CardHeader, CircularProgress, Divider, Grid, MenuItem, Snackbar, Stack, TextField } from '@mui/material';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';
import { ADDRESS_FIELD_ID, COMPANY_FIELD_ID, PHONE_FIELD_ID } from '../../com.vincecall.accountinfo/constants/Constants';
import { useNavigate } from 'react-router-dom';


const AddUser = () => {

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const fields = [
    USER_EMAIL_FIELD_ID,
    PHONE_FIELD_ID,
    USER_PASSWORD_FIELD_ID,
    ADDRESS_FIELD_ID,
    USER_REGISTRATION_FIELD_ID,
    COMPANY_FIELD_ID,
    USER_GQLURI_FIELD_ID,
    SERVICE_STATUS_FIELD_ID,
    SERVICE_RATE_FIELD_ID,
    SERVICE_FIELD_ID
  ];
  const [roles, setRoles] = useState([]);
  const [open, setOpen] = useState(false);
  const formFields = getUserFields(fields);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get("/admin/roles").then(res =>
      setRoles(res.data)).catch(err => console.log(err))
  }, [])

  const handleChange = (field_name, value) => {
    switch (field_name) {
      case USER_EMAIL_FIELD_ID: {
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
      case USER_PASSWORD_FIELD_ID: {
        setFormData({ ...formData, [field_name]: { title: "vincecall@123" } });
        break;
      }
      case USER_GQLURI_FIELD_ID: {
        setFormData({ ...formData, [field_name]: value });
        break;
      }
      case USER_REGISTRATION_FIELD_ID: {
        setFormData({ ...formData, [field_name]: value });
        break;
      }
      case PHONE_FIELD_ID: {
        setFormData({ ...formData, [field_name]: value });
        break;
      }
      case COMPANY_FIELD_ID: {
        setFormData({ ...formData, [field_name]: value });
        break;
      }
      case ADDRESS_FIELD_ID: {
        setFormData({ ...formData, [field_name]: value });
        break;
      }
      // case USER_ROLE_FIELD_ID: {
      //   setFormData({ ...formData, [field_name]: value });
      //   break;
      // }
      default: {
        console.error("Invalid field name: ", field_name);
      }
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    axiosInstance.post("/auth/signup", formData)
      .then(res => {
        setLoading(false)
        setOpen(true);
        navigate("/manageusers")
        console.log(res.data);
      })
  }

  return (
    <Card sx={{ borderTop: 'inset', margin: '140px' }}>
      <CardHeader title="VinceCall - Add SubAdmins" >
      </CardHeader>
      <Divider />
      <Box component={"form"} onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{ mt: 1 }}
        >
          {formFields.map((field, key) => (
            <Grid item xs={6} key={key} sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                {...field}
                sx={{ width: '240px' }}
                size="small"
                key={key}
                select={field?.select}
                label={field?.label}
                rows={field.id === ADDRESS_FIELD_ID ? 4 : ''}
                multiline={field.id === ADDRESS_FIELD_ID ? true : false}
                placeholder={field?.placeholder}
                error={errors[field?.name] ? true : false}
                helperText={errors?.[field?.name]?.message}
                defaultValue={formData[field?.name]}
                onChange={(event) => handleChange(field?.name, event.target.value)}
              >
                {/* {field.select && field.id === USER_ROLE_FIELD_ID ?
                  (roles.map((role, idx1) =>
                    <MenuItem value={role.name} key={idx1}>
                      {role.name}
                    </MenuItem>
                  ))
                  : (
                    <React.Fragment />
                  )} */}
              </TextField>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
            {
              loading ?
                <CircularProgress /> :
                <Stack direction='row' spacing={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Create User
                  </Button>
                </Stack>
            }
          </Grid>
          <Snackbar
            open={open}
            onClose={() => setOpen(!open)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            autoHideDuration={3000}
          >
            <Alert severity="success">User Added Successfully</Alert>
          </Snackbar>
        </Grid>
      </Box>
    </Card >)
}

export default AddUser