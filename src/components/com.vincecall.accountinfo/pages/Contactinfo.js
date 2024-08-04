import { Avatar, Box, Button, ButtonBase, Card, CardHeader, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import { getTaskFields } from '../fields/GetFields';
import { ADDRESSPROOF_FIELD_ID, ADDRESS_FIELD_ID, CEO_FIELD_ID, CITY_FIELD_ID, COMPANY_FIELD_ID, COUNTRY_FIELD_ID, DRIVERLISENCE_FIELD_ID, EMAIL_FIELD_ID, FEDERAL_FIELD_ID, PASSWORD_FIELD_ID, PHONE_FIELD_ID, STATE_FIELD_ID, USERNAME_FIELD_ID, ZIP_FIELD_ID } from '../constants/Constants';
import { AUTH_SECURE_USER_DETAILS_LS_LEY } from '../../com.vincecall.auth/constants/Constants';
import axios from 'axios';
import { axiosInstance } from '../../../interceptors/AxiosInterceptor';

const Contactinfo = (props) => {
  const fields = [
    USERNAME_FIELD_ID,
    ADDRESS_FIELD_ID,
    COMPANY_FIELD_ID,
    CITY_FIELD_ID,
    EMAIL_FIELD_ID,
    COUNTRY_FIELD_ID,
    PASSWORD_FIELD_ID,
    STATE_FIELD_ID,
    PHONE_FIELD_ID,
    ZIP_FIELD_ID,
  ];
  const udpateceofields = [
    EMAIL_FIELD_ID,
    FEDERAL_FIELD_ID,
    CEO_FIELD_ID,
    PHONE_FIELD_ID,
    DRIVERLISENCE_FIELD_ID,
    ADDRESSPROOF_FIELD_ID
  ];
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([]);
  // const states = ['Andhra Pradesh', 'Telangana', 'Tamilnadu']
  const [formData, setFormData] = useState({});
  const [textFields, setTextFields] = useState([])
  const formFields = getTaskFields(fields)
  const formFields2 = getTaskFields(udpateceofields)
  const user = JSON.parse(sessionStorage.getItem(AUTH_SECURE_USER_DETAILS_LS_LEY));
  const [userData, setUserData] = useState({});
  const role = user.roles[0]
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field_name, value) => {
    setErrors();
    setFormData();
    console.log(value);
    switch (field_name) {
      case COUNTRY_FIELD_ID:
        setStates(value.states)
    }
  }

  console.log(states);

  useEffect(() => {
    props.setLoading(true)
    axiosInstance.get("/user/getDetails").
      then(res => {
        setUserData(res.data)
        props.setLoading(false)
      }
      )
      .catch(err => console.log(err.data))
    axios.get("https://countriesnow.space/api/v0.1/countries/states").
      then(res => {
        setCountries(res.data.data)
      }
      )
      .catch(err => console.log(err.data))

  }, [])

  return (
    <Box >
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{textFields.length === 6 ? "Update CEO  Information" : 'Update Contact Information'}</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Box>
              <Grid
                container
                spacing={2}
                sx={{ mt: 1 }}
              >
                {textFields.map((field, key) => (
                  <Grid item xs={textFields.length === 6 ? 12 : 6} key={key}>
                    <TextField
                      {...field}
                      size='small'
                      key={key}
                      label={field?.label}
                      placeholder={field?.placeholder}
                      sx={{ width: field?.width }}
                      error={errors?.[field?.name] ? true : false}
                      helperText={errors?.[field?.name]?.message}
                      defaultValue={userData?.[field?.name]}
                      onChange={(event) => handleChange(field?.name, event.target.value)}
                    >
                      {field.select && field.id === COUNTRY_FIELD_ID ? (
                        countries.map((status, idx1) => (
                          <MenuItem value={status} key={idx1}>
                            {status.name}
                          </MenuItem>
                        ))
                      ) : field.select && field.id === STATE_FIELD_ID ? (
                        states.map((status, idx1) => (
                          <MenuItem value={status} key={idx1}>
                            {status.name}
                          </MenuItem>
                        ))) :
                        (
                          <React.Fragment />
                        )
                      }
                    </TextField>
                  </Grid>
                ))}

              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={{ color: 'white' }} onClick={handleClose} variant='contained' size='small'>Update Account</Button>
          <Button sx={{ color: 'white' }} onClick={handleClose} variant='contained' size='small'>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Grid container xs={12} spacing={1}>
        <Grid item xs={6}>
          <Card
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              // flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <CardHeader title="HQ Location"></CardHeader>
            <Divider />
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Avatar sx={{ width: 60, height: 60 }}></Avatar>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                      <PersonIcon fontSize='small' />
                      <Typography gutterBottom variant="h6" component="div">
                        &nbsp;&nbsp;&nbsp;{userData.company}
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex' }}><LockIcon fontSize='small' />
                      <Typography gutterBottom variant="subtitle1" component="div">
                        &nbsp;&nbsp;&nbsp;XXXXXXXXX
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex' }}>
                      <LocationOnIcon fontSize='small' />
                      <Typography gutterBottom variant="caption" component="div">
                        &nbsp;&nbsp;&nbsp;{userData.address}
                      </Typography>
                    </Grid>
                    {/* <Grid sx={{ display: 'flex' }}>
                      <Typography>&nbsp;</Typography>
                      <Typography gutterBottom variant="caption" component="div">
                        &nbsp;&nbsp;&nbsp; 2110 BOCA RATON DR STE A205, AUSTIN, TX, US - 78747
                      </Typography>
                    </Grid> */}
                    <Grid sx={{ display: 'flex' }}>
                      <EmailIcon fontSize='small' />
                      <Typography gutterBottom variant="body2" component="div">
                        &nbsp;&nbsp;&nbsp;{role === "User" ? userData.createdBy : userData.username}
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex' }}>
                      <PhoneIcon fontSize='small' />
                      <Typography variant="body2" color="text.secondary">
                        &nbsp;&nbsp;&nbsp;{userData.mobile}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid item>
                    <Button variant='contained' size='small' onClick={() => {
                      setTextFields(formFields);
                      handleClickOpen()
                    }}>Edit</Button>
                  </Grid>
                </Grid>
                {/* <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid> */}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              // flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <CardHeader title=" CEO & Authorized contacts Information"></CardHeader>
            <Divider />
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Avatar sx={{ width: 60, height: 60 }}></Avatar>
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container spacing={2}>
                  <Grid item xs>
                    <Grid sx={{ display: 'flex', alignItems: 'center', }}>
                      <PersonIcon fontSize='small' />
                      <Typography gutterBottom variant="h6" component="div">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.company}
                      </Typography>
                    </Grid>

                    <Grid sx={{ display: 'flex', }}>
                      <EmailIcon fontSize='small' />
                      <Typography gutterBottom variant="body2" component="div">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{role === "User" ? userData.createdBy : userData.username}
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', }}>
                      <PhoneIcon fontSize='small' />
                      <Typography variant="body2" color="text.secondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.mobile}
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" gutterBottom>Federal ID</Typography>
                      <Typography variant="body2" color="text.secondary">
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex' }}>
                      <Typography variant="body2" gutterBottom>EIN No</Typography>
                      <Typography variant="body2" color="text.secondary">

                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', }}>
                      <Typography variant="body2" gutterBottom>Driving Lisence</Typography>
                      <Typography variant="body2" color="text.secondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;82-4137957
                      </Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex', }}>
                      <Typography variant="body2" gutterBottom>Address Proof</Typography>
                      <Typography variant="body2" color="text.secondary">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Download
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid item>
                    <Button variant='contained' size='small' onClick={() => {
                      setTextFields(formFields2);
                      handleClickOpen()
                    }}>Edit</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ borderTop: 'inset', margin: '80px', }}>
        <CardHeader title="Service Details"></CardHeader>
        <Divider />
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Table sx={{ marginTop: '10px' }} stickyHeader aria-label="simple table">
            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>

                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Service</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Rate</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white', display: 'flex', justifyContent: 'left' }}>Status</TableCell>
              </TableRow>
              <TableRow>
                <TableCell >1</TableCell>
                <TableCell >{userData.service}</TableCell>
                <TableCell >{userData.rate}</TableCell>
                <TableCell sx={{ display: 'flex', justifyContent: 'left' }}>
                  <Chip
                    size="small"
                    label={userData.serviceStatus}
                  />
                </TableCell>
              </TableRow>
            </TableHead>

          </Table>

        </TableContainer>
      </Card>

      <Card sx={{ borderTop: 'inset', margin: '80px', }}>
        <CardHeader title="Branch Office Location"></CardHeader>
        <Divider />
        <TableContainer sx={{ margin: '20px', width: "94%" }} component={Paper}>
          <Grid sx={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <>
              <Button variant="contained" size="small" startIcon={<AddIcon />}>Add Contact</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography>Items Per Page<Select size='small'>
                <MenuItem>100</MenuItem>
                <MenuItem>200</MenuItem>
              </Select>
              </Typography>
            </>
            <TextField type="text" size='small' placeholder='search' />
          </Grid>
          <Table stickyHeader aria-label="simple table" style={{ marginTop: '10px' }}>

            <TableHead sx={{ backgroundColor: "gray" }}>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>S.no</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Name</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Email ID</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Phone Number</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Address</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>State & Country</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Zipcode</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Type of Contact</TableCell>
                <TableCell sx={{ backgroundColor: '#17479e', color: 'white' }}>Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>

        </TableContainer>
      </Card>

    </Box >
  )
}

export default Contactinfo